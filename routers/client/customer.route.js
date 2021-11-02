const express = require("express");
const router = express.Router();;
const controller = require("../../src.web/controllers/customer.controller");
const response = require('../../utils/api.res/response');

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

module.exports = router;