const express = require("express");
const router = express.Router();;
const controller = require("../../src.web/controllers/compaign.controller");
const response = require('../../utils/api.res/response');


router.get("/listCam", async(req, res) => {
    try {
        const result = await controller.getAllCam();
        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.get("/", async(req, res) => {
    try {
        const result = await controller.getAll();
        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.post("/", async(req, res) => {
    let body = req.body;
    try {
        const result = await controller.create(body);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const result = await controller.getOne(id);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.post("/multiple", async(req, res) => {
    let body = req.body;
    try {
        const result = await controller.createMultiple(body);
        response.success(res, "success", result.message);
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }


});
router.get("/listCus/:id/statusAction", async(req, res) => {
    console.log("=============================================");
    const id = req.params.id;
    try {
        const result = await controller.getManyListCus(id, statusAction);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});
// router.get("/getInfToSendMail/:id_comapign/:id_com", async(req, res) => {
//     const id_comapign = req.params.id_comapign;
//     const id_com = req.params.id_com;
//     try {
//         const result = await controller.getInfToSendMail(id_comapign, id_com);

//         console.log("*********************************************************************");
//         console.log(res);
//         response.success(res, "success", result)
//     } catch (err) {
//         console.log(err.message);
//         response.error(res, "failed", 500)
//     }

// });

router.get("/listCus/:id", async(req, res) => {
    console.log("=============================================");
    const id = req.params.id;
    try {
        const result = await controller.getCountCusCompaign(id);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

// router.post("/sendMail/:id_compaign", async(req, res) => {
//     // const id_compaign = req.params.id_compaign;
//     try {
//         // const result = await controller.getInfToSendMail(id_compaign);
//         // const result1 = await controller.getSendMail(result);

//         response.success(res, "success", result)
//         // response.success(res, "success", result1)
//     } catch (err) {
//         console.log(err.message);
//         response.error(res, "failed", 500)
//     }
// });

router.post('/send', async(req, res) => {
    let id_compaign = req.body.id_compaign;
    try {
        const result = await controller.getInfToSendMail(id_compaign);
        response.success(res, "success", result)
        for (let i = 0; i <= result.length; i++) {
            return await controller.getSendMail(result[i].email_com, result[i].password_com, result[i].address_com, result[i].phone_com, result[i].name_com, result[i].email_cus, result[i].name_cus, result[i].phone_cus, result[i].address_cus, result[i].name_compaign, result[i].content_tem);
        }


        // email_com, password_com, email_cus, name_compaign, content_tem, address_com
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});






module.exports = router;

// hàm gủi : tt com, pass, e cus
// hàm gủi cho 1 mail đơn lẻ
// gọi hàm gửi mail đơn lẻ