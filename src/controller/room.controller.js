const service=require("../service/room.service");
exports.availableRoomsDetails=async(req,res)=>{
    try{
        var data=req.body
        var responseData= await service.availableRoomsDetails(data);
        return res.send({responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
exports.availableRoomBooking=async(req,res)=>{
    try{
        var data=req.body
        var responseData= await service.availableRoomBooking(data);
        return res.send({responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
exports.roomAvailableDate=async(req,res)=>{
    try{
        var data=req.body
        var responseData= await service.roomAvailableDate(data);
        return res.send({responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}