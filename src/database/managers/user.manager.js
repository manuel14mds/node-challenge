import {User} from '../models/index.js'

class UserManager {
    constructor() {
    }
    getAll = async()=>{
        await User.sync()
        let result = await User.findAll()
        return result
    }

    create = async(data)=>{
        await User.sync()
        try {
            await User.create(data)
            return true
        } catch (error) {
            return false
        }
    }

    getById =  async(id)=>{
        try {
            let result = await User.findOne({where:{id:id}})
            return result
        } catch (error) {
            return false
        }
    }

    update =  async (id, newData) =>{
        try {
            await User.update(newData, {where: {id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    delete = async (id)=>{
        try {
            await User.destroy({where:{id:id}})
            return true
        } catch (error) {
            return false
        }
    }

    filterProperty = async(filter)=>{
        try{
            let data = await User.findAll({where:filter})
            return data
        }catch(err){
            return false
        }
    }

}

export default UserManager