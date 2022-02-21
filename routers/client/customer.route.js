const express = require("express");
const router = express.Router();;
const controller = require("../../src.web/controllers/customer.controller");
const response = require('../../utils/api.res/response');
const auth = require("../../middlewares/auth.middleware");

router.get("/", auth, async(req, res) => {
    try {
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

router.delete("/:id", async(req, res) => {
    let id_cus = req.params.id
    console.log("----------------------------------------------------------");
    console.log(id_cus);
    try {
        const result = await controller.disable(id_cus);
        response.success(res, "success", result)
    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

module.exports = router;