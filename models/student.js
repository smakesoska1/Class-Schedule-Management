const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Student = sequelize.define('student', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING
    },
    index: {
        type:Sequelize.STRING
    }
})

module.exports = Student