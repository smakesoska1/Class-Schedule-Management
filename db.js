const Sequelize = require("sequelize");
const sequelize = require('./sequelize')

const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.aktivnost = require('./models/aktivnost.js');
db.dan = require('./models/dan.js');
db.grupa = require('./models/grupa.js');
db.predmet = require('./models/predmet.js');
db.student = require('./models/student.js');
db.tip = require('./models/tip.js');

//relacije
db.predmet.hasMany(db.grupa,{as:'grupe',foreignKey: 'predmet'});
db.predmet.hasMany(db.aktivnost, {as: 'aktivnost', foreignKey: 'predmet' })
db.dan.hasMany(db.aktivnost, {as: 'aktivnost', foreignKey: 'dan'})
db.tip.hasMany(db.aktivnost, {as: 'aktivnost', foreignKey: 'tip'})
db.grupa.hasMany(db.aktivnost, {as: 'aktivnost', foreignKey: 'grupa', allowNull: 'true'})


db.student.belongsToMany(db.grupa,{as:'grupe',through:'student_grupa',foreignKey:'student'});
db.grupa.belongsToMany(db.student,{as:'student',through:'student_grupa',foreignKey:'grupa'});




module.exports=db;