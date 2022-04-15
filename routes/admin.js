var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
const Admin = require("../models/Admin");

router.post("/login/", async (req, res) => {
    let body = req.body;
    let admin = await Admin.find({ "email": body.data.email, "password": body.data.password });
    let data = { data: { status: "failed" } };
    if (admin.length != 0)
        data = { data: { status: "success", admin: admin[0] } };
    res.end(JSON.stringify(data));
});

module.exports = router;