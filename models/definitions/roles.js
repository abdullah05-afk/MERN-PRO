const {Model, DataTypes}= require('sequelize');
const sequelize= require('../../bin/dbConnections');

class ROLES extends Model{}

ROLES.init({
    roleId : {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    roleName: {
        type: DataTypes.STRING(),
       
    },


},{
    timestamps: true,
    paranoid: true,
    //name: "roles",
    sequelize
})

module.exports=ROLES;