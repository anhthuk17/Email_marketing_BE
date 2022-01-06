const Sequelize = require("sequelize");
const db = require("../config");

const Template = db.define("template", {
    id_tem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content_tem: {
        type: Sequelize.STRING
    },
    status_tem: {
        type: Sequelize.BOOLEAN
    },
    id_com: {
        type: Sequelize.INTEGER
    },
    name_tem: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Template;