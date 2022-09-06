import Character from '../models/Characters.model.js'

class CharacterManager {
    constructor() {
    }
    getAll = async()=>{
        await Character.sync()
        let result = await Character.findAll()
        return result
    }

    create = async(data)=>{
        await Character.sync()
        try {
            await Character.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Character.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Character.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    delete = async (id)=>{
        try {
            await Character.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    filterProperty = async(filter)=>{
        try{
            let data = await Character.findAll({where:filter})
            return data
        }catch(err){
            return false
        }
    }

}

export default CharacterManager