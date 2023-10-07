const repository=require("../repository/property.repository");
exports.findByProperty=async(data)=>{
    try{
const propertyData=await repository.findByProperty(data);
return propertyData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.deleteProperty=async(data)=>{
    try{
const propertyData=await repository.deleteProperty(data)
return propertyData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.createOrupdate=async(data)=>{
    try{
const propertyData=await repository.createOrupdateProperty(data);
return propertyData;
    }catch(error){
        throw new Error(error.message);
    }
}