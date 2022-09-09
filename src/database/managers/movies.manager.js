import Movies from '../models/Movies.model.js'

class MoviesManager {
    constructor (){
    }
    getAll = async()=>{
        await Movies.sync()
        let result = await Movies.findAll()
        return result
    }

    create = async(data)=>{
        await Movies.sync()
        try {
            await Movies.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Movies.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Movies.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }
    delete = async (id)=>{
        try {
            await Movies.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

}

export default MoviesManager