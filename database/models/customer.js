const Sequelize = require("sequelize");
const db = require("../config");

const Customer = db.define("customer", {
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
    phone_cus: {
        type: Sequelize.INTEGER
    },
    status_cus: {
        type: Sequelize.BOOLEAN
    },
    gender_cus: {
        type: Sequelize.STRING
    },
    id_com: {
        type: Sequelize.INTEGER
    },
    type_cus: {
        type: Sequelize.STRING
    },
    age_cus: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Customer;