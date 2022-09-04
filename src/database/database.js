import { Sequelize } from 'sequelize';
import __dirname from '../utils.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'/database.sqlite'
});
//const sequelize = new Sequelize('sqlite::memory:');


export default sequelize