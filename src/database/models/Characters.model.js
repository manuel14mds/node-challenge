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
    biography: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Characters'
});


export default Character