const Sequelize = require("sequelize");
const db = require("../config");

const Customer = db.define("customers", {
    id_cus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_cus: {
        type: Sequelize.STRING
    },
    address_cus: {
        type: Sequelize.STRING
    },
    email_cus: {
        type: Sequelize.STRING
    },
    address_cus: {
        type: Sequelize.STRING
    },
    phone_cus: {
        type: Sequelize.STRING
    },
    status_cus: {
        type: Sequelize.BOOLEAN
    },
    gender_cus: {
        type: Sequelize.STRING
    },
    id_tem: {
        type: Sequelize.STRING
    },
    id_com: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Customer;