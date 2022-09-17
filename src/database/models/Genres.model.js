import { DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Genre = sequelize.define('Genres', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movies:{
        type:DataTypes.JSON,
        defaultValue:[]
    }

}, {
    tableName: 'Genres'
});

export default Genre