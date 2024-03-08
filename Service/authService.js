const { compare } = require("bcryptjs");
const userModel = require("../models/userModel");
 

module.exports = {
    login: async (validate) =>{
        try {
            const isUser = await userModel.getUserByUserName(validate.userName);

            if(isUser.error || isUser.response==null ){
                return{
                    error: "invalid credentials",
                };
            }

            const isValid = await compare(
                validate.password , 
                isUser.response.dataValues.password
                );

                if(!isValid){
                    return{
                        error: "invalid credentials",
                    };
                };
                return{
                    response : true,
                };
            
        } catch(error){
            return{
                error: error.message,
            };
        }
    },
};