const {Model, DataTypes}= require('sequelize');
const sequelize= require('../../bin/dbConnections');
class USERS extends Model {}
USERS.init({
    userId : {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    userName: {
        type: DataTypes.STRING(36),
        unique: true,
        allowNull: false,
    },
    password: {
        type : DataTypes.STRING(),
        allowNull: false,
    }

},{
    timestamps: true,
    paranoid: true,
  
    sequelize
})

module.exports=USERS;