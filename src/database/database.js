import { Sequelize } from 'sequelize';
import __dirname from '../utils.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/database.sqlite'
});
//const sequelize = new Sequelize('sqlite::memory:');
(async function test() {
    try {
        await sequelize.sync();

    } catch (error) {
        console.log(error);
    }
})()


export default sequelize