const customer = require('../../database/models/customer');
const { ENUM } = require('../../utils/index');
const { Op, where, QueryTypes } = require("sequelize");
const db = require("../../database/config");

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
    // disable: async(id) => {
    //     try {
    //         return await customer.update({
    //             trangthai: ENUM.DISABLE
    //         }, {
    //             where: {
    //                 id: id
    //             }
    //         })
    //     } catch (error) {
    //         return error
    //     }
    // },
    // disable congdichvu
    getAll: async(id_com) => {
        try {
            return await customer.findAll({
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
            return await customer.create(body);
        } catch (error) {
            return error
        }
    },

    createMultiple: async(body) => {
        try {
            return await customer.bulkCreate(body);
        } catch (error) {
            return error
        }
    },
    disable: async(id_cus) => {
        try {
            let QUERY1 = `
            SET FOREIGN_KEY_CHECKS=0;`
            let QUERY2 = `
            DELETE FROM customer WHERE id_cus = ${id_cus};`
            let QUERY3 = `
            SET FOREIGN_KEY_CHECKS=1;`
            const data = await db.query(QUERY1, { type: QueryTypes.SELECT })
            data = await db.query(QUERY2, { type: QueryTypes.SELECT })
            data = await db.query(QUERY3, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            return error
        }
    },






}