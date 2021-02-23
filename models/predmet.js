const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Predmet = sequelize.define('predmet', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING
    }
})

module.exports = Predmet