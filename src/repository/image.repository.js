const db=require("../dbconfig/db.config");
const image=db.image;
const property=db.property
exports.createImage=async(data)=>{
    var imageData;
    try{
        imageData=await image.bulkCreate(data);
        return imageData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.imagefindOne=async(data)=>{
    try{
       var  imageData=await image.findAll({
        where:{propertyId:data.id}
       });
        return imageData;
    }catch(error){
        throw new Error(error.message);
    }  
}