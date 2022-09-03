import express from 'express'

const app = express()
const server = app.listen(8080, ()=>console.log('listening on 8080 port'))


app.get('/create', async (req,res)=>{
    res.send('create')
})


app.get('/', async (req,res)=>{
    res.send('hello word')
})