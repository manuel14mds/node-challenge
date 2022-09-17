import { Router } from "express"
import MoviesManager from '../database/managers/movies.manager.js'
import GenreManager from '../database/managers/genre.manager.js'
import CharacterManager from "../database/managers/character.manager.js"

const characterService = new CharacterManager()
const moviesService = new MoviesManager()
const genreService = new GenreManager()
const router = Router()

//get all movies and filter. Require a filter by params
// http://localhost:8080/movies
// http://localhost:8080/movies?title=raw
// http://localhost:8080/movies?genre=1
// http://localhost:8080/?order=ASC / DESC
router.get('/',async(req,res)=>{

    if(req.query.order && (req.query.order == 'ASC' || req.query.order == 'DESC')){
        let result = await moviesService.getOrder(req.query.order)
        return res.send(result)
    }else if(req.query.title || req.query.genre){
        let info = await moviesService.GetByProperty(req.query)
        return res.send(info)
    }else{
    let data = await moviesService.getMovies()
    res.send(data)
    }
})

//add a new movie, Require movie object by req.body
// http://localhost:8080/movies
router.post('/',async(req,res)=>{
    let result = await moviesService.create(req.body)
    if(!result)res.status(500).send({status:'error', error:'Couldnt save'})
    if(req.body.characters && req.body.characters.length != 0) await relationMovieToCharacter(result, req.body)
    if(req.body.genre) await relationMovieGenre(result, req.body)
    res.send('saved successfully')
})

//update movie, Require movie object by req.body & movie id by req.params
// http://localhost:8080/movies/2
router.put('/:id', validateId, async(req,res)=>{
    let result = await moviesService.update(req.params.id, req.body)
    if(!result)res.status(500).send({status:'error', error:'Couldnt update'})
    if(req.body.characters && req.body.characters.length != 0) await relationMovieToCharacter(req.params.id, req.body)
    if(req.body.genre) await relationMovieGenre(req.params.id, req.body)
    res.send('updated successfully')
})

//delete movie, Require movie id by req.params
// http://localhost:8080/movies/2
router.delete('/:id', validateId, async(req,res)=>{
    let result = await moviesService.delete(req.params.id)
    if(!result)res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('deleted successfully')
})
//movie detail, Require movie id by req.params
// http://localhost:8080/movies/detail/2
router.get('/detail/:id', validateId, async(req,res)=>{
    try {
        let movie = await movieDetail(req.params.id)
        res.send(movie)
    } catch (error) {
        return res.status(500).send({status:'error', error:'Couldnt get movie detail'})
    }
})

// list all genres
// http://localhost:8080/movies/genres
router.get('/genres',async (req,res)=>{
    let data = await genreService.getAll()
    res.send(data)
})

// create a genre. Requiere a genre object by req.body
// http://localhost:8080/movies/genres
router.post('/genres',async (req,res)=>{
    let result = await genreService.create(req.body)
    if(!result) return res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('genre created successfully')
})

// create a genres list harcored
// http://localhost:8080/movies/addGenres
router.post('/addGenres',async (req,res)=>{
    let image = 'https://picsum.photos/200/300'
    let genres = [
        {name:'crime',image},{name:'comedy',image},{name:'animation',image},
        {name:'tragedy',image},{name:'thriller',image},{name:'adventure',image},
        {name:'mystery',image},{name:'action',image},{name:'romance',image}]
    let result = await genreService.createBulk(genres)
    if(!result) return res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('genres created successfully')

})

router.get('/*',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/movies/${req.params[0]}' method 'GET' no implemented`})
})



/* ---+++--- Utils functions ---+++--- */

async function validateId(req,res,next){
    req.params.id = parseInt(req.params.id)
    let result = await moviesService.getById(req.params.id)
    if(!result) return res.status(404).send({status:'error', error:'Not found'})
    next()
}

const relationMovieToCharacter = async (movieId, newData) => {
    let character
    for(const item of newData.characters){
        character = await characterService.getById(item)
        if(!character.movies.includes(movieId)){
            character.movies.push(movieId)
            await characterService.update(character.id, {movies:character.movies})
        }
    }
}
const movieDetail = async (movieId) => {
    let movie = await moviesService.getById(movieId)
    let characterList =[]
    let character ={}
    for(const item of movie.characters){
        character = await characterService.getById(item)
        characterList.push({
            name:character.name,
            image:character.image
        })
    }
    movie.characters = characterList
    let genre = await genreService.getById(movie.genre)
    if(genre) movie.genre = genre.name
    return movie
}

const relationMovieGenre = async(movieId, newData)=>{
    let genre = await genreService.getById(newData.genre)
    genre.movies.push(movieId)
    await genreService.update(genre.id, {movies:genre.movies})
}

export default router