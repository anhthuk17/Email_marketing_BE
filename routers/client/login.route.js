const express = require("express");
const router = express.Router();;
const controller = require("../../src.web/controllers/login.controller");
const response = require('../../utils/api.res/response');
const mysql = require("mysql")
const db = mysql.createPool({
    connectionLimit: 100,
    host: '103.138.88.13', //This is your localhost IP
    user: "tha22979_em", // "newuser" created in Step 1(e)
    password: "Z@123456", // password for the new user
    database: "tha22979_em", // Database name
    port: "3306" // port name, "3306" by default
})

router.get("/", async(req, res) => {
    try {
        const result = await controller.getAll();

        response.success(res, "success", result)

    } catch (err) {
        console.log(err.message);
        response.error(res, "failed", 500)
    }
});

router.post("/signup", async(req, res) => {
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
/* CROS middleware */
router.post('/login', function(req, res, next) {
    db.getConnection(function(err, connection) {
        var user = req.body.username,
            pass = req.body.password;

        connection.query('SELECT * FROM company WHERE email_com = ? AND password_com_login = ?', [user, pass],
            async function(err, results) {
                if (results[0]) {
                    console.log('ok');
                    response.success(res, "success", results[0])
                } else {
                    // res.render('/');
                    console.log("no");
                    response.success(res, "success", results[0])
                }
            });

    });
});


module.exports = router;