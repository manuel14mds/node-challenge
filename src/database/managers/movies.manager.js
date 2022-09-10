//import Movie from '../models/Movie.model.js'
import {Movie} from '../models/index.js'

class MovieManager {
    constructor (){
    }
    getAll = async()=>{
        await Movie.sync()
        let result = await Movie.findAll()
        return result
    }

    create = async(data)=>{
        await Movie.sync()
        try {
            await Movie.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Movie.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Movie.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }
    delete = async (id)=>{
        try {
            await Movie.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

}

export default MovieManager