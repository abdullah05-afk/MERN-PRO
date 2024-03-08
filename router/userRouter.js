const {createUser, getAllUser,updateUser,deleteUser}= require("../Controller/userController");
//const { updateUser } = require("../models/userModel");
const routes = require("express").Router();

routes.post("/createdUser", createUser);
routes.get("/getAllUser", getAllUser);
routes.put("/updateuser",updateUser);
routes.delete("/deleteUser",deleteUser);

module.exports = routes;