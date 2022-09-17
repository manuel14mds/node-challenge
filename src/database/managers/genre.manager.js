import {Genre} from '../models/index.js'

class GenreManager {
    constructor() {
    }
    getAll = async()=>{
        await Genre.sync()
        let result = await Genre.findAll()
        return result
    }

    create = async(data)=>{
        await Genre.sync()
        try {
            await Genre.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Genre.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Genre.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    delete = async (id)=>{
        try {
            await Genre.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    createBulk = async(list)=>{
        try{
            await Genre.bulkCreate(list)
            return true
        }catch(err){
            return false
        }
    }

}

export default GenreManager