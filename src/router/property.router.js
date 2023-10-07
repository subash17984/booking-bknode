const app=require("express").Router();
const propertyController=require("../controller/property.controller");

app.post("/findByproperty",propertyController.findByProperty);
app.post("/delete",propertyController.deleteProperty);
app.post("/createOrupdate",propertyController.createOrupdate);
module.exports=app;