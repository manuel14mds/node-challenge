import { Router } from "express"
import UserManager from "../database/managers/user.manager.js"

const userService = new UserManager()
const router = Router()
// require a user object by req.body and saved
// http://localhost:8080/auth/users
router.post('/users', async(req,res)=>{
    try {
        await userService.create(req.body)
        return res.send('user created')
    } catch (error) {
        res.send({ error : 'error', descripcion: 'User is not created'})
    }
})

// give all users on db
// http://localhost:8080/auth/users
router.get('/users', async (req, res) => {
    try {
        let users = await userService.getAll()
        res.send(users)
    } catch (error) {
        return res.status(500).send({status:'error', error:'Couldnt list'})
    }
})

router.post('/login', async (req, res) => {
    res.send('working on login')
})
router.post('/register', async (req, res) => {
    res.send('working on register')
})

router.get('/*',(req,res)=>{
    res.send({ error : -2, descripcion: `route '/auth/${req.params[0]}' method 'GET' no implemented`})
})
export default router
