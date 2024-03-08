const {models} = require("./index");

module.exports ={
    createUser: async (body)=>{
        try{
            const createdUser = await models.users.create({...body});
            return{
                response:createdUser,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }
    },
    getAllUser: async ()=>{
        try{
            const users = await models.users.findAll({
                attributes:{
                    exclude:["createdAt", "password", "updatedAt", "userId", "userName"],

                }
                // attributes:["userId,", "userName"]

            });
            return{
                response:users,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }

    },

    getUserByUserName: async (userName)=> {
        try{
            const users = await models.users.findOne({
                where : {
                    userName: userName, 
                }
            });
            return{
                response:users,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }
    },

    updateUser: async (body)=>{
        try{
            const updateUser = await models.users.update({...body});
            return{
                response:updateUser,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }
    },

    deleteUser: async (userId)=>{
        try{
            const deleteUser = await models.users.destroy({

                where: {
                    userId: userId,
                }
            });
            return{
                response:deleteUser,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }
    },
    updateUser: async (userName)=> {
        try{
            const users = await models.users.findone({
                where : {
                    userName: userName, 
                }
            });
            return{
                response:users,
            }
        }
        catch(error){
            return{
                error:{
                    error:error.message,
                    filename: "userModel",
                }
            };
        }
    }
    
};