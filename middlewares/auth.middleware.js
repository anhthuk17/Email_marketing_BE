const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
    const token = req.header("Authorization");
    console.log(token);
    if (!token) {
        return res.status(401).json({ status: false, message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        console.log(decoded);
        req.account = decoded.account;
        next();
    } catch (err) {
        // res.status(401).json({ message: "Token is not valid" });
        next();

    }
};