const app=require("express").Router();
const multer  = require('multer');
const userController=require("../controller/guest.controller");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.post("/signup",userController.signUp);
app.post("/login",userController.login);
app.post("/propertycreate",upload.array('files'),userController.ownerCreateProperty);
app.post("/createReservation",userController.ownerCreateProperty);

module.exports=app;