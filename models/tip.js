const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Tip = sequelize.define('tip', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING
    }
})

module.exports = Tip