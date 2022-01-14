const Sequelize = require("sequelize");
// var conn = mysql.createConnection({
//     host: '103.138.88.13',
//     user: 'tha22979_em',
//     password: 'Z@123456',
//     database: 'tha22979_em'
// });
module.exports = new Sequelize('tha22979_em', 'tha22979_em', 'Z@123456', {
    host: '103.138.88.13',
    dialect: 'mysql',
    port: 3306,
    logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});