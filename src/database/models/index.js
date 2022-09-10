import Character from './Characters.model.js'
import Movie from './Movies.model.js'
import Gender from './Genders.model.js'
import Users from './Users.model.js'

Gender.hasMany(Movie,{
    onUpdate: 'CASCADE'
})
Movie.hasOne(Gender,{
    onUpdate: 'CASCADE'
})
Movie.belongsToMany(Character,{through: 'CharacterMovies'})
Character.belongsToMany(Movie,{through:'CharacterMovies'})

export {Character, Movie, Gender, Users}