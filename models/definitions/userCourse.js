const {Model, DataTypes}= require('sequelize');
const sequelize= require('../../bin/dbConnections');
class usercourse extends Model{}
usercourse.init({
    usercourseId : {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    

},{
    timestamps: true,
    paranoid: true,
   
    sequelize
})

module.exports=usercourse;