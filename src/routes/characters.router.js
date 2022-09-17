import { Router } from "express"
import Character from '../database/managers/character.manager.js'
import MovieManager from "../database/managers/movies.manager.js"

const moviesService =  new MovieManager()
const characterService = new Character()
const router = Router()

//create character. Require a character object by req.body 
// http://localhost:8080/characters
router.post('/', async(req,res)=>{
    let result = await characterService.create(req.body)
    if(req.body.movies && req.body.movies.length != 0) await relationCharacterToMovie(req.params.id, req.body)
    if(result) return res.send('character created successfully')
    res.status(500).send({status:'error', error:'Couldnt save'})
})

//get character by id. Require a character Id by params
// http://localhost:8080/characters/1
router.get('/:id', validateId ,async (req, res) => {
    let result = await characterService.getById(req.params.id)
    if(result){
        let user={image:result.image, name:result.name}
        return res.send(user)
    }
    res.status(404).send({status:'error', error:'Character not found'})
})

//get all characters and filter. Require a filter by params
// http://localhost:8080/characters
// http://localhost:8080/characters?name=emma
// http://localhost:8080/characters?age=45
// http://localhost:8080/characters?movies=2
router.get('/', async (req, res) => {
    if(req.query){
        if(req.query.movies){
            let exist = await moviesService.getById(req.query.movies)
            if(!exist)return res.status(404).send({status:'error', error:'Movie not found'})
            let result = await characterService.getByMovie(req.query.movies)
            res.send(result)
        }else{
            let result = await characterService.filterProperty(req.query)
            if(!result) return res.status(404).send({status:'error', error:'Not found'})
            res.send(result)
        }
    }else{
        let characters = await characterService.getAll()
        res.send(characters)
    }
})

//update character by id. Require a character id by params and the object character by req.body 
// http://localhost:8080/characters/1
router.put('/update/:id', validateId, async (req, res) => {
    let result = await characterService.update(req.params.id, req.body)
    if(req.body.movies && req.body.movies.length != 0) await relationCharacterToMovie(req.params.id, req.body)
    if(result) return res.send('character updated successfully')
    res.status(500).send({status:'error', error:'Couldnt update'})
})

//character detail. Require a character id by params 
// http://localhost:8080/characters/detail/1
router.get('/detail/:id', validateId, async (req, res) => {
    try {
        let data = await characterDetail(req.params.id)
        res.send(data)
    } catch (error) {
        return res.status(500).send({status:'error', error:'Couldnt show character detail'})
    }
})

//delete character by id
// http://localhost:8080/characters/1
router.delete('/:id', validateId, async (req,res)=>{
    let result = await characterService.delete(req.params.id)
    if(result) return res.send('character delete successfully')
    res.status(500).send({status:'error', error:'Couldnt delete'})
})


router.get('/*',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/characters/${req.params[0]}' method 'GET' no implemented`})
})


/* ---+++--- Utils functions ---+++--- */

// validate if an id is valid
async function validateId(req,res,next){
    req.params.id = parseInt(req.params.id)
    let result = await characterService.getById(req.params.id)
    if(!result) return res.status(404).send({status:'error', error:'Not found'})
    next()
}

const relationCharacterToMovie = async (characterId, newData) => {
    let movie
    for(const item of newData.movies){
        movie = await moviesService.getById(item)
        if(!movie.characters.includes(item)){
            movie.characters.push(characterId)
            await moviesService.update(movie.id, {characters:movie.characters})
        }
    }
}

const characterDetail = async (characterId) => {
    let character = await characterService.getById(characterId)
    let movies=[]
    let movie = {}
    for(const item of character.movies){
        movie = await moviesService.getById(item)
        movies.push({title:movie.title, image:movie.image})
    }
    character.movies = movies
    return character
}

export default router
