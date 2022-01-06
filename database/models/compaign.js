const Sequelize = require("sequelize");
const db = require("../config");

const Compaign = db.define("compaign", {
    id_compaign: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_compaign: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    createOfDate_compaign: {
        type: Sequelize.DATE
    },
    updateOfDate_compaign: {
        type: Sequelize.DATE
    },
    id_tem: {
        type: Sequelize.INTEGER
    },
    content_tem: {
        type: Sequelize.STRING
    },
    id_com: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Compaign;