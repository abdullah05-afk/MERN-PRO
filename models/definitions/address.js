const {Model, DataTypes}= require('sequelize');
const sequelize= require('../../bin/dbConnections');
class ADDRESS extends Model{}
ADDRESS.init({
    addressId : {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    adreess: {
        type: DataTypes.STRING(36),
        unique: true,
        allowNull: false,
    },


},{
    timestamps: true,
    paranoid: true,
   // name: "address",
    sequelize
})

module.exports=ADDRESS;