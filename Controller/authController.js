const joi = require("joi");
const { login } = require("../Service/authService");


const loginSchema = joi.object().keys({
    username: joi.string().required().min(3).required(),
    password: joi.string().required().min(6).required(),
});



module.exports = {
    login: async(req,res)=>{
        try{
            const validate = await loginSchema.validateAsync(req.body);
            const loginResponse =  await login (validate);
           // const factorial = await login (validate);

            if( await loginResponse.error){
                return res.send({
                    message: "login Api" ,
                    error: loginResponse.error,
                });
            }
            return res.send({
               response: loginResponse.response,
            });
        }   catch (error) {
            return res.send({
               
                error: error.message,
            });

        }
    },
    logout: (req,res)=>{
        try {
            return res.send({
                message: "logout API",
            });
        } catch (error){
            return res.send({
                error: error.message,
            })
        }
    },
};