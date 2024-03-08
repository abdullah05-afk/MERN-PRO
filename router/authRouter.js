const router = require("express").Router();
const authController = require('../Controller/authController')
//router.post("/login",login);
//router.get("/logout",logout);

router.post("/login" ,authController.login);

module.exports=router