const sequelize = require("../bin/dbConnections");
const USERS = require('./definitions/user');
const ADDRESS = require("./definitions/address");
const ROLES = require("./definitions/roles");
const COURSE = require("./definitions/course");
const userCourse = require("./definitions/userCourse");

// relations

// one-to-one
ADDRESS.hasOne(USERS,{foreignKey: "addressId"});
USERS.belongsTo(ADDRESS,{foreignKey: "addressId"});

// one-to-many
ROLES.hasMany(USERS,{foreignKey:"roleId"});
USERS.belongsTo(ROLES,{foreignKey:"roleId"});

//user-usercourse
USERS.hasMany(userCourse,{foreignKey:"userId"});
userCourse.belongsTo(USERS,{foreignKey:"userId"});



//course-usercourses

COURSE.hasMany(userCourse,{foreignKey:"courseId"});
userCourse.belongsTo(COURSE,{foreignKey:"courseId"});


const models = {
    users: USERS,
    adress: ADDRESS,
    course: COURSE,
    roles: ROLES,
    usercourse: userCourse,

};
const db={};
db.sequelize=sequelize;
sequelize.models=models;
module.exports = {db, models};
