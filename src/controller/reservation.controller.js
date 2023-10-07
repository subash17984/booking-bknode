const service=require("../service/reservation.service");
exports.createReservation=async(req,res)=>{
    try{
var data=req.body;
if(Object.entries(data).length==0){
    throw new Error("data is not found");
}
var responseData=await service.createReservation(data);
return res.send({responseData});
    }catch(error){
       res.send({status:"error",error:error.message});
    }
}
