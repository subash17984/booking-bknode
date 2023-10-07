const db=require("../dbconfig/db.config");
const imagerepository=require("./image.repository");
const room=db.room;
const reservation=db.reservation;
const propertyData=db.property;
const image=db.image;
exports.creteOrupateRoom=async(data)=>{
    try{
        if(!data.id){
            const roomData=await room.create(data);
            return roomData;
        }else{
            let datas=data.rooms
            const roomData=await room.update(datas,{
                where:{id:datas.id}
            });
            return roomData;
        }
    }catch(error){
        throw new Error(error.message);
    }
}
exports.availableRoomsDetails=async()=>{
    try{
var responseData=await propertyData.findAll({
    where:{flag:0},
    include:[{
        model:room,
        where:{isAvailable:0},
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
    }],
    attributes: {
        exclude: ["createdAt", "updatedAt"],
    },
    raw: true, 
    nest: true,
    // plain:true,
    });
    var listofrooms=[];
    var objectdt={};
    for (i=0;i<responseData.length;i++){
        let propertyDt=responseData[i];
let imagedata=await imagerepository.imagefindOne(propertyDt);
    if(imagedata){
        propertyDt.imageData=imagedata;
        objectdt={propertyDt}
        listofrooms.push(objectdt);
    }
}
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.availableRoomBooking=async(data)=>{
    try{
var responseData=await room.findOne({
    where:{
        propertyId:data.propertyId,
        roomNo:data.roomNo,
        ownerDeleteFlag:0,
    isAvailable:0,
    },
    include:[{
        model:propertyData,
        where:{flag:0},
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
    }],
    attributes: {
        exclude: ["createdAt", "updatedAt"],
    },
    raw: true, 
    nest: true,
    });
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.roomAvailableDate=async(data)=>{
    try{
var responseData=await room.findOne({
    where:{
        propertyId:data.propertyId,
        roomNo:data.roomNo,
        ownerDeleteFlag:0,
    isAvailable:0,
    },
    attributes:["id","minStay","maxStay","availableFrom"]
})
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}