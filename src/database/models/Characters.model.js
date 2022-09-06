import { DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Character = sequelize.define('Characters', {

    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    history: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movies:{
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'Characters'
});

//console.log(Users === sequelize.models.User)

export default Character