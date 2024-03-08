const userModel = require("../models/userModel");
const {hash} = require("bcryptjs");
const {v4:uuid} = require("uuid");
const { models} = require("../models");
module.exports={
    createUser: async (body)=>{
        try{
            body.userId = uuid();
            body.password = await hash(body.password, 15);
            const user= await userModel.getUserByUserName(body.userName);
            console.log(user);
            if (user.response || user.error){
                return {
                    error: "The user already exits."
                }
            }
            const createdUser = await userModel.createUser(body);
            if(createdUser.error){
                return{
                    error:createdUser.error,
                }
            }
            delete createdUser.response.dataValues.password;
            return{
                response:createdUser.response,
            }
         }
         catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userService",
                }
            
            }
         }
            
    },
    getAllUser: async()=>{
        try{
            const user = await userModel.getAllUser();
            if(user.error){
                return{
                    error:user.error,
                }
            }
            return{
                response: user.response,
            }
        }
        catch(error){
            return{
                error:{
                    error: error.message,
                    filename: "userService",
                }
            }
        }
    },
    updateUser: async (body)=>{
        try{
        
           // body.password= await hash(body.password, 10);
            const updateUser = await userModel.updateUser(body);
            if(updateUser.error){
                return{
                    error:error.message,
                }
            }            
            //delete updateUser.response.dataValues.password;
            return {
                response:updateUser.response,
            }

        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename:"userService",
                }
            }
        }
    },

    deleteUser: async (body)=>{
        try{
        
           // body.password= await hash(body.password, 10);
            const deleteUser = await userModel.deleteUser(body.userId);
            if(deleteUser.error){
                return{
                    error:error
                }
            }            
            //delete updateUser.response.dataValues.password;
            return {
                response:deleteUser.response,
            }

        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename:"userService",
                }
            }
        }
    },


}