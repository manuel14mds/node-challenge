import { Router } from "express"
import MoviesManager from '../database/managers/movies.manager.js'

const moviesService = new MoviesManager()
const router = Router()

//get all movies
router.get('/',async(req,res)=>{
    let data = await moviesService.getAll()
    res.send(data)
})

//add a new movie, Require movie object by req.body
router.post('/',async(req,res)=>{
    let result = await moviesService.create(req.body)
    if(!result)res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('saved successfully')
})
//update movie, Require movie object by req.body & movie id by req.params
router.put('/:id', validateId, async(req,res)=>{
    let result = await moviesService.update(req.params.id, req.body)
    if(!result)res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('updated successfully')
})

//delete movie, Require movie id by req.params
router.delete('/:id', validateId, async(req,res)=>{
    let result = await moviesService.delete(req.params.id)
    if(!result)res.status(500).send({status:'error', error:'Couldnt save'})
    res.send('deleted successfully')
})


router.get('/*',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/movies/${req.params[0]}' method 'GET' no implemented`})
})

async function validateId(req,res,next){
    req.params.id = parseInt(req.params.id)
    let result = await moviesService.getById(req.params.id)
    if(!result) return res.status(404).send({status:'error', error:'Not found'})
    next()
}

export default router