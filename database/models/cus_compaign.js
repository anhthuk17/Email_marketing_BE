const Sequelize = require("sequelize");
const db = require("../config");

const cus_compaign = db.define("cus_compaign", {
    id_cus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    id_compaign: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    createOfDate_compaign: {
        type: Sequelize.DATE
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = cus_compaign;