const history = require('../../database/models/history');
const { ENUM } = require('../../utils/index');
const { Op, where, QueryTypes } = require("sequelize");
const db = require("../../database/config");

module.exports = {
    getOne: async(id) => {
        try {
            return await history.findOne({
                where: {}
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await history.update({
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
            let QUERY = `
            select count(history.id_cus) as count, compaign.*, template.*, history.* from history
				left join compaign on compaign.id_compaign = history.id_compaign 
                left join template on template.id_tem = compaign.id_tem
            group by history.id_compaign;`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },
    // disable congdichvu
    create: async(body) => {
        try {
            return await history.create(body);
        } catch (error) {
            return error
        }
    },

    createMultiple: async(body) => {
        try {
            return await history.bulkCreate(body);
        } catch (error) {
            return error
        }
    },
    getManyStatusCus: async(id) => {
        try {
            let QUERY = `select  history.sendOfDate, history.status_action, customer.id_cus,customer.name_cus, customer.address_cus, customer.email_cus, customer.phone_cus, customer.type_cus, customer.gender_cus, customer.age_cus from customer
            right join history on customer.id_cus = history.id_cus 
            where history.id_compaign = ${id};`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },

}