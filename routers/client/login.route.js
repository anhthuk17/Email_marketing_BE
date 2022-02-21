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
const jwt = require("jsonwebtoken");
const config = require("config");
const Account = require("./../../database/models/company");
const auth = require("../../middlewares/auth.middleware");

router.get("/", auth, async(req, res) => {
    try {
        console.log(req.account.id_com);
        const result = await controller.getAll(req.account.id_com);
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
router.post('/login', async(req, res) => {
    db.getConnection(async function(err, connection) {
        var user = req.body.username,
            pass = req.body.password;
        const { username, password } = req.body;
        try {
            // console.log(req.body);
            let account = await Account.findOne({
                where: {
                    email_com: username,
                    password_com_login: password
                }
            });
            // console.log(account);
            if (account == null) {
                return res
                    .status(400)
                    .json({ errors: [{ message: "Invalid email or password" }] });
            }
            const payload = {
                account: {
                    id_com: account.id_com,
                    name_com: account.name_com,
                    address_com: account.address_com,
                    email_com: account.email_com,
                    phone_com: account.phone_com,
                    password_com: account.password_com,
                    password_com_login: account.password_com_login,
                }
            };
            jwt.sign(
                payload, "mysecrettoken", { expiresIn: 360000000 }
            );

            // console.log(jwt.sign(
            //     payload, "mysecrettoken", { expiresIn: 360000000 }
            // ));

            connection.query('SELECT * FROM company WHERE email_com = ? AND password_com_login = ?', [user, pass],
                async function(err, results) {
                    if (results[0]) {
                        console.log('ok');
                        response.success(res, "success", jwt.sign(
                            payload, "mysecrettoken", { expiresIn: 360000000 }
                        ))
                    } else {
                        console.log("no");
                        response.success(res, "success", results[0])
                    }
                });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }



    });

});

module.exports = router;