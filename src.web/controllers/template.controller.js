const template = require('../../database/models/template');
const { ENUM } = require('../../utils/index');
const { Op, where } = require("sequelize");

module.exports = {
    getOne: async(id) => {
        try {
            return await template.findOne({
                where: {
                    id_tem: id
                }
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await template.update({
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
    getAll: async() => {
        try {
            return await template.findAll({
                // where: {
                //     name_tem: name_tem
                // }

            });
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    create: async(body) => {
        try {
            return await template.create(body);
        } catch (error) {
            return error
        }
    },

    createMultiple: async(body) => {
        try {
            return await template.bulkCreate(body);
        } catch (error) {
            return error
        }
    }





}