const repository=require("../repository/room.repository");
exports.availableRoomsDetails=async()=>{
    try{
        var responseData= await repository.availableRoomsDetails();
        return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.availableRoomBooking=async(data)=>{
    try{
        var responseData= await repository.availableRoomBooking(data);
        return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}
exports.roomAvailableDate=async(data)=>{
    try{
        var responseData= await repository.roomAvailableDate(data);
        return responseData;
    }catch(error){
        throw new Error(error.message);
    }
}