const app=require("express").Router();
const guestController=require("../controller/reservation.controller");

app.post("/create",guestController.createReservation);
module.exports=app;