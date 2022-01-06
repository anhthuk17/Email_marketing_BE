const cus_compaign = require('../../database/models/cus_compaign');
const { ENUM } = require('../../utils/index');
const { Op, where } = require("sequelize");

module.exports = {
    getOne: async(id) => {
        try {
            return await cus_compaign.findOne({
                where: {}
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await cus_compaign.update({
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
            return await cus_compaign.findAll({
                // where: {
                //     status_cus: 1 || 0
                // }

            });
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    create: async(body) => {
        try {
            return await cus_compaign.create(body);
        } catch (error) {
            return error
        }
    },

    createMultiple: async(body) => {
        try {
            return await cus_compaign.bulkCreate(body);
        } catch (error) {
            return error
        }
    }
}