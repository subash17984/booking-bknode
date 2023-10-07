const db=require("../dbconfig/db.config");
const owner=db.guest;
exports.findOneByOwner=async(data)=>{
    try{
    const userData=await owner.findOne({
        where:{
            emailId:data.emailId,
            phoneNumber:data.phoneNumber,
            isFlag:1
        }
    });
    return userData;
}catch(error){
    throw new Error(error.message);
}
}

