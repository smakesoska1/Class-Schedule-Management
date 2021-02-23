const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2017814","root","",{host:"localhost",dialect:"mysql",logging:false});

module.exports = sequelize