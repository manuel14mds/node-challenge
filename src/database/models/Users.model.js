import { Model, DataTypes } from 'sequelize'
import sequelize from '../database.js'

const Users = sequelize.define('Users', {
    // Model attributes are defined here
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
});


export default Users