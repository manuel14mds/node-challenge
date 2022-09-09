import { DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Gender = sequelize.define('Genders', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movies: {
        type: DataTypes.ARRAY,
        defaultValue:[]
    },

}, {
    tableName: 'Genders'
});

export default Gender