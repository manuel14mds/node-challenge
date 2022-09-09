import Character from './Characters.model.js'
import Movie from './Movies.model.js'


Movie.belongsToMany(Character,{through: 'CharacterMovies'})
Character.belongsToMany(Movie,{through:'CharacterMovies'})
