import express from 'express'
import sequelize from './database/database.js'
import Users from './database/models/Users.model.js'

const app = express()
const server = app.listen(8080, async () => {
    console.log('listening on 8080 port')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

app.use(express.json())
app.post('/users',async (req,res) => {
    await Users.sync()
    try {
        await Users.create(req.body).then(()=>{
            return res.send('user created')
        })
    } catch (error) {
        res.send({ error : 'error', descripcion: 'User is not created'})
    }
})


app.get('/users', async (req, res) => {
    let users = await Users.findAll()
    res.send(users)
})