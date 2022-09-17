import {Character} from '../models/index.js'

class CharacterManager {
    constructor() {
    }
    getAll = async()=>{
        await Character.sync()
        let result = await Character.findAll()
        return result
    }
    getCharacters = async()=>{
        await Character.sync()
        let result = await Character.findAll({
            attributes: ['name', 'image']
        })
        return result
    }

    getCharactersMovies = async(movieId)=>{
        await Character.sync()
        let result = await Character.findAll()
        let characters = []
        for(const character of result){
            for(const item of character.movies){
                if(item === movieId){
                    characters.push({
                        id:character.id,
                        name:character.name,
                        image:character.image
                    })
                }
            }
        }
        return characters
    }


    create = async(data)=>{
        await Character.sync()
        try {
            let character = await Character.create(data)
            return character.id
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