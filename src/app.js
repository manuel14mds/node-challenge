import express from 'express'
import sequelize from './database/database.js'

//routes
import authRouter from './routes/auth.router.js'
import characterRouter from './routes/characters.router.js'

const app = express()
app.use(express.json())

const server = app.listen(8080, async () => {
    console.log('listening on 8080 port')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

app.use('/auth', authRouter)
app.use('/characters', characterRouter)
