import Movies from '../models/Movies.model.js'

class MoviesManager {
    constructor() {
    }
    getAll = async()=>{
        let result = await Movies.getAll()
        return result
    }

    create = async(data)=>{
        await Movies.sync()
        try {
            await Movies.create(data).then(()=>{
                return true
            })
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
            let data = await this.getById(id)
            if(data){
                let keysData = Object.keys(data)
                for (const key of keysData) {
                    if (data[key] != newData[key]) {
                        if (data['id']) continue
                        data[key] = newData[key]
                    }
                }
                await data.save()
            }
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