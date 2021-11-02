const customer = require('../../database/models/customer');
const { ENUM } = require('../../utils/index');
const { Op, where } = require("sequelize");

module.exports = {
    getOne: async(id) => {
        try {
            return await customer.findOne({
                where: {
                    id_cus: id
                }
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await customer.update({
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
            return await customer.findAll({
                where: {
                    status_cus: 1
                }
            });
        } catch (error) {
            return error
        }
    }
}