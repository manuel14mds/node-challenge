import { Router } from "express"
import Character from '../database/managers/character.manager.js'


const characterService = new Character()
const router = Router()

//create character
router.post('/', async(req,res)=>{
    let result = await characterService.create(req.body)
    if(result){
        return res.send('character created successfully')
    } 
    res.status(500).send({status:'error', error:'Couldnt save'})
})

//get character by id
router.get('/:id', validateId ,async (req, res) => {
    let result = await characterService.getById(req.params.id)
    if(result){
        let user={image:result.image, name:result.name}
        return res.send(user)
    }
    res.status(404).send({status:'error', error:'Character not found'})
})

//get all characters and filter
router.get('/', async (req, res) => {
    if(req.query){
        let result = await characterService.filterProperty(req.query)
        if(!result) return res.status(404).send({status:'error', error:'Not found'})
        res.send(result)
    }else{
        let characters = await characterService.getAll()
        res.send(characters)
    }
})

//update character by id
router.put('/update/:id', validateId, async (req, res) => {
    let result = await characterService.update(req.params.id, req.body)
    if(result){
        return res.send('character updated successfully')
    }
    res.status(500).send({status:'error', error:'Couldnt update'})
})

//delete character by id
router.delete('/:id', validateId, async (req,res)=>{
    let result = await characterService.delete(req.params.id)
    if(result) return res.send('character delete successfully')
    res.status(500).send({status:'error', error:'Couldnt delete'})
})


router.get('/*:params',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/api/products/${req.params[0]}' method 'GET' no implemented`})
})

async function validateId(req,res,next){
    req.params.id = parseInt(req.params.id)
    let result = await characterService.getById(req.params.id)
    if(!result) return res.status(404).send({status:'error', error:'Not found'})
    next()
}

export default router
