const Sequelize = require("sequelize");
const sequelize  = require("../sequelize");

const Aktivnost = sequelize.define('aktivnost', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    naziv:{
        type:Sequelize.STRING,
        unique:true
    },
    pocetak: {
        type:Sequelize.FLOAT
    },
    kraj: {
        type:Sequelize.FLOAT
    }
})

module.exports = Aktivnost