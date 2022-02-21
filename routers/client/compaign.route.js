const express = require("express");
const router = express.Router();
const controller = require("../../src.web/controllers/compaign.controller");
const response = require('../../utils/api.res/response');
var cron = require('node-cron');
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middlewares/auth.middleware");

router.get("/listCam", async(req, res) => {
    try {
        const result = await controller.getAllCam();
        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});

router.get("/", auth, async(req, res) => {

    try {
        // const token = req.header("Authorization");
        // console.log(token);
        // const user = jwt.verify(token, config.get("jwtSecret"));
        // console.log(user.account);
        const result = await controller.getAll(req.account.id_com);
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


router.post('/send', async(req, res) => {
    let id_compaign = req.body.id_compaign;
    try {
        const result = await controller.getInfToSendMail(id_compaign);
        response.success(res, "success", result)
        for (let i = 0; i <= result.length; i++) {
            return await controller.getSendMail(result[i].id_com, result[i].email_com, result[i].password_com, result[i].address_com, result[i].phone_com, result[i].name_com, result[i].id_cus, result[i].email_cus, result[i].name_cus, result[i].phone_cus, result[i].address_cus, result[i].id_compaign, result[i].name_compaign, result[i].content_tem);
        }


        // email_com, password_com, email_cus, name_compaign, content_tem, address_com
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});
router.post('/setSchedule', async(req, res) => {
    let id_compaign = req.body.id_compaign;
    let datetime_req = req.body.datetime_req;

    try {
        const result = await controller.getInfToSendMail(id_compaign);
        response.success(res, "success", result)
        cron.schedule(datetime_req, async() => {
            for (let i = 0; i <= result.length; i++) {
                return await controller.getSendMail(result[i].id_com, result[i].email_com, result[i].password_com, result[i].address_com, result[i].phone_com, result[i].name_com, result[i].id_cus, result[i].email_cus, result[i].name_cus, result[i].phone_cus, result[i].address_cus, result[i].id_compaign, result[i].name_compaign, result[i].content_tem);
            }
        });
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});
router.get('/camStatistic/all', async(req, res) => {
    try {
        const result = await controller.CampaignStatistic();
        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});
router.post('/updateTemOdCam', async(req, res) => {
    let id_compaign = req.body.id_compaign;
    let content_tem = req.body.content_tem;

    try {
        const result = await controller.updateTemOfCam(id_compaign, content_tem);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }

});
router.post('/getChildCam', async(req, res) => {
    let id_compaign = req.body.id_compaign;
    try {
        const result = await controller.getChildCam(id_compaign);
        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});
// update compaign
router.put("/", async(req, res) => {
    let id_compaign = req.body.id_compaign;
    let name_compaign = req.body.name_compaign;
    try {
        const result = await controller.update(id_compaign, name_compaign);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.delete("/:id", async(req, res) => {
    let id_compaign = req.params.id
    console.log("----------------------------------------------------------");
    console.log(id_compaign);
    try {
        const result = await controller.disable(id_compaign);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});


module.exports = router;


// hàm gủi : tt com, pass, e cus
// hàm gủi cho 1 mail đơn lẻ
// gọi hàm gửi mail đơn lẻ