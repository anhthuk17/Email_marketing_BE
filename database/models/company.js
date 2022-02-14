const Sequelize = require("sequelize");
const db = require("../config");

const Company = db.define("company", {
    id_com: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_com: {
        type: Sequelize.STRING
    },
    address_com: {
        type: Sequelize.STRING
    },
    email_com: {
        type: Sequelize.STRING
    },
    phone_com: {
        type: Sequelize.INTEGER
    },
    password_com: {
        type: Sequelize.STRING
    },
    password_com_login: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Company;