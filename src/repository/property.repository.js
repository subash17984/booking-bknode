const { Op } = require("sequelize");
const sequelize = require('sequelize');
const db=require("../dbconfig/db.config");
const image=require("./image.repository");
const room=require("./room.repository");
const property=db.property;
const roomData=db.room;
exports.createOrupdateProperty=async(data)=>{
    var propertyData=[];
    try{
        if(!data.id){
            propertyData=await property.create(data[0].data);
            var findpropertyId=await property.findAll();
            let propertyId=findpropertyId[findpropertyId.length-1].id;
            data[0].data.propertyId=propertyId;
            for(i=0;i<data.length;i++){
                data[i].propertyId=id;
            }
            data.propertyId=id;
            propertyData=await image.createImage(data);
            propertyData=await room.creteOrupateRoom(data[0].data);
    return propertyData;
        }else{
            propertyData=await property.update(data,{
                where:{
                id:data.id
                }
            });
            propertyData=await room.creteOrupateRoom(data);
            return propertyData;
        }
            
    }catch(error){
        throw new Error(error.message);
    }
}
exports.findByProperty=async(data)=>{
    try{
const propertyData=await property.findOne({
    where :{
        ownerId:data.ownerId,
        propertyName:sequelize.where (sequelize.fn('LOWER',sequelize.col('propertyName')),'LIKE','%'+ data.propertyName.toLowerCase()+'%'),
        flag:0,
    },
    raw:true,
    // plain: true,
    nest:true,
    include:[
        {
            model:roomData,
            where:{roomNo:data.roomNo,
                ownerDeleteFlag:0},
            attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
        }
      ],
    attributes: {
        exclude: ["createdAt", "updatedAt"],
      }
     
});
let rows=JSON.stringify(propertyData);
return JSON.parse(rows);
    }catch(error){
        throw new Error(error.message);
    }
}
exports.deleteProperty=async(data)=>{
    try{
const propertyData=await roomData.update(data,{
    where:{
        roomNo:data.roomNo,
        propertyId:data.propertyId,
    }
})
return propertyData;
    }catch(error){
        throw new Error(error.message);
    }
}
