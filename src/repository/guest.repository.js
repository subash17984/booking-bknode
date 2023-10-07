const db=require("../dbconfig/db.config");
const owner=require("./owner.repository");
const property=require("./property.repository");
const guest=db.guest;

exports.userSignUp=async(data)=>{
    try{
        var userData;
        if(data.isFlag==0){
            userData=await guest.findOne({
                attributes:["id","emailId","phoneNumber"],
                where:{
            emailId:data.emailId,
            phoneNumber:data.phoneNumber,
            isFlag:data.isFlag
                }
            });
        }else if(data.isFlag==1){
            userData=await owner.findOneByOwner(data);
        }
if(userData){
    throw new Error("Email already Exists");
}
const userRegistration=await guest.create(data);
return userRegistration.dataValues;
    }catch(error){
        throw new Error(error.message);
    }
};

exports.findOneByUser=async(data)=>{
    try{
        var userData;
            userData=await guest.findOne({
                where:{
                    emailId:data.emailId,
                    phoneNumber:data.phoneNumber,
                } ,attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
            });
    if(!userData){
        throw new Error("No user Data found");
    }
    return userData;
}catch(error){
    throw new Error(error.message);
}
}

exports.ownerCreateProperty=async(data)=>{
    try{
        var userData= await property.createOrupdateProperty(data);
    return userData;
}catch(error){
    throw new Error(error.message);
}
}
exports.roomBookingDetails=async(data)=>{
    try{

    }catch(error){
        throw new Error(error.message);
    }
}