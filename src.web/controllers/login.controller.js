const company = require('../../database/models/company');
const { ENUM } = require('../../utils/index');
const { Op, where, QueryTypes } = require("sequelize");
const db = require("../../database/config");


module.exports = {
    getOne: async(id) => {
        try {
            return await company.findOne({
                where: {


                }
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await company.update({
                trangthai: ENUM.DISABLE
            }, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    getAll: async(id_com) => {
        try {
            return await company.findAll({
                where: {
                    id_com: id_com
                }
            });
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    create: async(body) => {
        try {
            return await company.create(body);
        } catch (error) {
            return error
        }
    },



}