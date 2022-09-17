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
    getOrder = async(order)=>{
        let data = await Movie.findAll({order:[['title', order]]})
        console.log(data)
        return data
    }

    GetByProperty = async (property)=>{
        let data = await Movie.findAll({where:property})
        return data
    }

    update =  async (id, newData) =>{
        try {
            let movie = await Movie.update(newData, {where: {id:id}})
            return movie
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