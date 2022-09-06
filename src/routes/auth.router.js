import { Router } from "express"
import Users from '../database/models/Users.model.js'
const router = Router()

router.post('/', async(req,res)=>{
    await Users.sync()
    try {
        await Users.create(req.body).then(()=>{
            return res.send('user created')
        })
    } catch (error) {
        res.send({ error : 'error', descripcion: 'User is not created'})
    }
})

router.get('/', async (req, res) => {
    let users = await Users.findAll()
    res.send(users)
})
router.post('/login', async (req, res) => {
    res.send('working on login')
})
router.post('/register', async (req, res) => {
    res.send('working on register')
})

router.get('/*:params',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/api/products/${req.params[0]}' method 'GET' no implemented`})
})
export default router
