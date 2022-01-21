const Sequelize = require("sequelize");
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

// const Sequelize = require("sequelize");
// module.exports = new Sequelize('email_marketing', 'root', '12345', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//     logging: true,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });