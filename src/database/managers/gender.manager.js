//import Gender from '../models/Gender.model.js'
import {Gender} from '../models/index.js'

class CharacterManager {
    constructor() {
    }
    getAll = async()=>{
        await Gender.sync()
        let result = await Gender.findAll()
        return result
    }

    create = async(data)=>{
        await Gender.sync()
        try {
            await Gender.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await Gender.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await Gender.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    delete = async (id)=>{
        try {
            await Gender.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    createBulk = async(list)=>{
        try{
            await Gender.bulkCreate()
            return true
        }catch(err){
            return false
        }
    }

}

export default CharacterManager