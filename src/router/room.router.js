const roomController=require("../controller/room.controller");
const app=require("express").Router();

app.get("/findAll",roomController.availableRoomsDetails);
app.post("/findOne",roomController.availableRoomBooking);
app.post("/minMaxStay",roomController.roomAvailableDate);
module.exports=app;