const app=require("express").Router();
const userRouter=require("./src/router/guest.router");
const reservationRouter=require("./src/router/reservation.router");
const propertyRouter=require("./src/router/property.router");
const roomRouter=require("./src/router/room.router");
app.use("/guest",userRouter);
app.use("/reservation",reservationRouter);
app.use("/property",propertyRouter);
app.use("/room",roomRouter);

module.exports=app;