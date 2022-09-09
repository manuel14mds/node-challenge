import { DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Movie = sequelize.define('Movies', {
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Movies'
});

export default Movie