const compaign = require('../../database/models/compaign');
const { ENUM } = require('../../utils/index');
const { Op, where, QueryTypes } = require("sequelize");
const db = require("../../database/config");
const nodemailer = require("nodemailer");
const emailExistence = require("email-existence");


module.exports = {
    getOne: async(id) => {
        try {
            return await compaign.findOne({
                where: {}
            })
        } catch (error) {
            return error
        }
    },
    // disable congdichvu
    disable: async(id) => {
        try {
            return await compaign.update({
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
    getAllCam: async() => {
        try {
            return await compaign.findAll({
                // where: {
                //     status_cus: 1 || 0
                // }

            });
        } catch (error) {
            return error
        }
    },
    getAll: async() => {
        try {
            let QUERY = `select count(id_cus) as count , compaign.*,
                template.name_tem
				from  compaign 
                inner join cus_compaign 
				on cus_compaign.id_compaign = compaign.id_compaign
                inner join template
                on template.id_tem = compaign.id_tem
				GROUP BY cus_compaign.id_compaign
				HAVING COUNT(id_cus) > 1;`
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
            return await compaign.create(body);
        } catch (error) {
            return error
        }
    },

    createMultiple: async(body) => {
        try {
            return await compaign.bulkCreate(body);
        } catch (error) {
            return error
        }
    },
    getManyListCus: async(id) => {
        try {
            let QUERY = `select customer.* from customer where id_cus in (select id_cus from cus_compaign where id_compaign = ${id})`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },
    getInfToSendMail: async(id_compaign) => {
        try {
            let QUERY = `SELECT 
            compaign.id_compaign,
            compaign.content_tem,
            compaign.name_compaign,
            company.id_com,
            company.email_com,
            company.password_com,
            company.address_com,
            company.phone_com,
            company.name_com,
            customer.id_cus,
            customer.name_cus,
            customer.address_cus,
            customer.email_cus,
            customer.phone_cus,
            customer.gender_cus,
            customer.type_cus,
            customer.age_cus
        FROM
            compaign
            inner join company on compaign.id_com = company.id_com
            inner join 
            (cus_compaign inner join customer on cus_compaign.id_cus= customer.id_cus) 
            on compaign.id_compaign = cus_compaign.id_compaign
        where compaign.id_compaign=${id_compaign}`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }

    },
    getCountCusCompaign: async(id) => {
        try {
            let QUERY = `select  customer.name_cus, customer.address_cus, customer.email_cus, customer.phone_cus, customer.type_cus, customer.gender_cus, customer.age_cus from cus_compaign
            left join compaign on compaign.id_compaign = cus_compaign.id_compaign 
            left join customer on customer.id_cus = cus_compaign.id_cus 
            where compaign.id_compaign = ${id};`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },

    getSendMail: async(id_com, email_com, password_com, address_com, phone_com, name_com, id_cus, email_cus, name_cus, phone_cus, address_cus, id_compaign, name_compaign, content_tem) => {

        // emailExistence.check(email_cus, function(error, res) {
        //     console.log('res: ' + res);
        //     if (res == true) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // user: 'ngothianhthu161299@gmail.com',
                user: email_com,
                // pass: 'thunta@123',
                pass: password_com,
            },
        });

        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }
        if (content_tem != null) {
            content_tem = replaceAll(content_tem, "#name#", name_cus)
            content_tem = replaceAll(content_tem, "#phone#", phone_cus)
            content_tem = replaceAll(content_tem, "#address#", address_cus)
            content_tem = replaceAll(content_tem, "#email#", email_cus)
            content_tem = replaceAll(content_tem, "#com_add#", address_com)
            content_tem = replaceAll(content_tem, "#com_phone#", phone_com)
            content_tem = replaceAll(content_tem, "#com_name#", name_com)
            try {
                let QUERY = `INSERT INTO tha22979_em.history (sendOfDate, content_tem_after_replace, status_action, id_com, id_cus, id_compaign) 
                            VALUES ( '2012-01-21 00:00:00', '${content_tem}', 'n', ${id_com}, ${id_cus}, ${id_compaign});`
                var data = await db.query(QUERY, { type: QueryTypes.SELECT })
                let QUERY1 = `SELECT id_his FROM history ORDER BY id_his DESC LIMIT 0, 1;`
                var data1 = await db.query(QUERY1, { type: QueryTypes.SELECT })
                console.log(data);
                console.log(data1);
                console.log(data1.find(x => x.id_his).id_his);
            } catch (error) {
                console.log("error:", error);
                return error
            }
        }


        let htmlBody = '<p>' + content_tem + '</p>' +
            '<img src = "https://email-marketing-01.herokuapp.com/images/girl.png' + '/?id=' + data1.find(x => x.id_his).id_his + '" >' +
            'http://localhost:3000/?id=' + data1.find(x => x.id_his).id_his + '&url=https://tiki.vn/';
        console.log(htmlBody);
        let mailOptions = {
            from: email_com,
            to: email_cus,
            subject: name_compaign,
            text: "Our store's newest products",
            html: htmlBody,
            // attachments: [{
            //     path: "http://localhost:3000/images/girl.png"
            // }],
            // /img/tenha , param id của his , chèm id của his vô link img
            //  url có param id_his, img 
            //  trong vòng for kt mail có hoạt động không , nếu 
            // hoạt động => send, không thì
            // ? id=id_his


        };




        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent successfully');
            }
        });

        //     } else {
        //         console.log("sai");

        //     }
        // });

    },
    updateStatusActHisToO: async(id) => {
        try {
            let QUERY = `update history
            set status_action='o'
            where id_his= ${id}`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },

    updateStatusActHisToC: async(id) => {
        try {
            let QUERY = `update history
            set status_action='c'
            where id_his= ${id}`
            const data = await db.query(QUERY, { type: QueryTypes.SELECT })
            console.log(data);
            return data
        } catch (error) {
            console.log("error:", error);
            return error
        }
    },


}