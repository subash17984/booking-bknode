const Sequelize=require('sequelize');
require("dotenv").config();
var sequelize=new Sequelize(
process.env.SCHEMA,
process.env.USER_NAME,
process.env.PASSWORD,
{
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}
);
const db={};
sequelize
.authenticate()
.then(()=>{
    console.log("connection has been establised successfully");
})
.catch((err)=>{
    console.error("unable to connect to the database:",err);
});

db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.guest=require("../model/guest.model")(sequelize,Sequelize);
// db.owner=require("../model/owner.model")(sequelize,Sequelize);
db.reservation=require("../model/reservation.model")(sequelize,Sequelize);
db.property=require("../model/property.model")(sequelize,Sequelize);
db.image=require("../model/image.model")(sequelize,Sequelize);
db.room=require("../model/room.model")(sequelize,Sequelize);

////Assocication

//****gest and reservation association ****//
db.guest.hasOne(db.reservation,{foreignKey:"guestId"});
db.reservation.belongsTo(db.guest,{foreignKey:"guestId"});

//****owner and property association ****//
db.guest.hasMany(db.property,{foreignKey:"ownerId"});
db.property.belongsTo(db.guest,{foreignKey:"ownerId"});

//****property and image association ****//
//****room and property association ****//
db.property.hasMany(db.image,{foreignKey:"propertyId"});
db.image.belongsTo(db.property,{foreignKey:"propertyId"});

db.property.hasMany(db.room,{foreignKey:"propertyId"});
db.room.belongsTo(db.property,{foreignKey:"propertyId"});


db.room.hasOne(db.reservation,{foreignKey:"roomNo"});
db.reservation.belongsTo(db.room,{foreignKey:"roomNo"});
// db.room.belongsTo(db.property,{foreignKey:"propertyId"});


module.exports=db;