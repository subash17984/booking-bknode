const express=require("express");
const dotenv=require("dotenv").config();
const router = require("./router");
const db=require("./src/dbconfig/db.config");
const cors = require('cors');
const app=express();
var corsOptions = {
    origin: "*",
};
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));

//  db.sequelize.sync();
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });

// router
app.use("/api",router);

app.get("/",(req,res)=>{
res.json({message:"Welcome to roombooking-applicationbk"});
});

//set port
const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{  
    console.log(`server listening on port ${PORT}`);

})
