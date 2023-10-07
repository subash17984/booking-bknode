const service=require("../service/property.service");
exports.findByProperty=async(req,res)=>{
    try{
        const data=req.body;
var responseData=await service.findByProperty(data);
return res.send({status:"success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
exports.deleteProperty=async(req,res)=>{
    try{
const data=req.body;
var responseData=await service.deleteProperty(data);
return res.send({status:"success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
exports.createOrupdate=async(req,res)=>{
    try{
        const data=req.body;
        var responseData=await service.createOrupdate(data);
        return res.send({status:"success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});  
    }
}