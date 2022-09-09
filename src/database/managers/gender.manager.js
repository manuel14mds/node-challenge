import Genders from '../models/Genders.model.js'

class CharacterManager {
    constructor() {
    }
    getAll = async()=>{
        await Genders.sync()
        let result = await Genders.findAll()
        return result
    }

    create = async(data)=>{
        await Genders.sync()
        try {
            await Genders.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Genders.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Genders.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    delete = async (id)=>{
        try {
            await Genders.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    filterProperty = async(filter)=>{
        try{
            let data = await Genders.findAll({where:filter})
            return data
        }catch(err){
            return false
        }
    }

}

export default CharacterManager