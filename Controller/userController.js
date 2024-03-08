const userService = require("../Service/userService");
const joi = require("joi");

const createdUserSchema = joi.object().keys({
    userName: joi.string().required().min(5).max(35),
    password: joi.string().required().min(5).max(25),

})

const updateUserSchema = joi.object().keys({
    userId: joi.string().required().min(5).max(30),
    userName: joi.string().required().min(5).max(35),
    password: joi.string().required().min(5).max(25),

})

const deleteUserSchema = joi.object().keys({
    userId: joi.string().required().min(5),
    //userName: joi.string().required().min(5),
   // password: joi.string().required().min(5),

})
module.exports = {
    createUser: async (req, res)=>{
        try{

            const validate = await createdUserSchema.validateAsync(req.body);
            const createdUser = await userService.createUser(validate);
            if(createdUser.error){
                return res.send({
                    error:createdUser.error,
                    
                });
            }
            return res.send({
                response:createdUser.response,
            });
        }
        catch(error){
            return res.send({
                error:{
                    error:error.message,
                    filename: "userController",
                }
            });
        }
    },
    getAllUser : async (req, res)=>{
        try{
            const users = await userService.getAllUser();
            if(users.error){
                return res.send({
                    error:users.error,
                });
            }
            return res.send({
                response: users.response,
            });
        }
        catch(error){
            return res.send({
                error:{
                    error:error.message,
                    filename: "userController",
                },
            });
        }
    },

    updateUser: async (req, res)=>{
        try{

            const validate = await updateUserSchema.validateAsync(req.body);
            const updateUser = await userService.updateUser(validate);
            if(updateUser.error){
                return res.send({
                    error:updateUser.error,
                    
                });
            }
            return res.send({
                response:updateUser.response,
            });
        }
        catch(error){
            return res.send({
                error:{
                    error:error.message,
                    filename: "userController",
                }
            });
        }
    },
    deleteUser: async (req, res)=>{
        try{

            const validate = await deleteUserSchema.validateAsync(req.query);
            const deleteUser = await userService.deleteUser(validate);
            if(deleteUser.error){
                return res.send({
                    error:deleteUser.error,
                    
                });
            }
            return res.send({
                response:deleteUser.response,
            });
        }
        catch(error){
            return res.send({
                error:{
                    error:error.message,
                    filename: "userController",
                }
            });
        }
    },


};