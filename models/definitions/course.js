const {Model, DataTypes}= require('sequelize');
const sequelize= require('../../bin/dbConnections');
class COURSE  extends Model{}
COURSE.init({
    courseId : {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    courseName: {
        type: DataTypes.STRING(36),
        unique: true,
        allowNull: false,
    },


},{
    timestamps: true,
    paranoid: true,
   // name: "course",
    sequelize
})

module.exports=COURSE;