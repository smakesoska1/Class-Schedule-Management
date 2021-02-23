const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Dan = sequelize.define('dan', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING
    }
})

module.exports = Dan