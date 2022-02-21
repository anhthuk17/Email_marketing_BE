const template = require('../../database/models/template');
const { ENUM } = require('../../utils/index');
const { Op, where, QueryTypes } = require("sequelize");
const db = require("../../database/config");
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
    // disable: async(id) => {
    //     try {
    //         return await template.update({
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
    disable: async(id_tem) => {
        try {
            let QUERY = `DELETE FROM template WHERE id_tem = ${id_tem};`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    getAll: async(id_com) => {
        try {
            return await template.findAll({
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
    },
    updateTemOfCam: async(id_tem, content_tem) => {
        try {
            let QUERY = `
            UPDATE template
            SET content_tem = '${content_tem}'
            WHERE id_tem = ${id_tem};`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }

    },
    update: async(id_tem, name_tem) => {
        try {
            let QUERY = `UPDATE template
            SET name_tem = '${name_tem}'
            WHERE id_tem = ${id_tem};`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },





}