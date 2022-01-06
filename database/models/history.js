const Sequelize = require("sequelize");
const db = require("../config");

const History = db.define("history", {

    //  id_his, sendOfDate,content_tem_after_replace, status_action, id_cus,  id_com, id_copaignm,
    id_his: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sendOfDate: {
        type: Sequelize.DATE
    },
    content_tem_after_replace: {
        type: Sequelize.STRING
    },
    status_action: {
        type: Sequelize.BOOLEAN
    },
    id_com: {
        type: Sequelize.INTEGER
    },
    id_cus: {
        type: Sequelize.INTEGER
    },
    id_compaign: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = History;