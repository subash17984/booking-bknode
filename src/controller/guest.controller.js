const service=require("../service/guest.service");
exports.signUp=async(req,res)=>{
    try{
const signUpData=req.body;
if(Object.entries(signUpData).length===0){
    throw new Error("Data is not found");
}
var responseData=await service.userSignUp(signUpData);
return res.send({status:"success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}

exports.login=async(req,res)=>{
    try{
        var data=req.body;
        if(Object.entries(data).length===0){
            throw new Error("Data is not found");
        }
var responseData=await service.findOneByuser(data);
return res.send({ status: "success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
exports.ownerCreateProperty=async(req,res)=>{
    try{
        var filedata=req.files
var data=req.body;
var objectDt=[];
for(i=0 ;i<filedata.length;i++){
    let files=filedata[i];
    let imageUrl=Buffer.from(files.buffer).toString('base64');
    let bodycontent={files,imageUrl,data}
objectDt.push(bodycontent);
}
if(Object.entries(objectDt).length===0){
    throw new Error("Data is not found");
}
var responseData=await service.ownerCreateProperty(objectDt);
res.send({status:"success",responseData});
    }catch(error){
        res.send({status:"error",error:error.message});
    }
}
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