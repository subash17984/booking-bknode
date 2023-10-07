const repository=require("../repository/reservation.repository");
exports.createReservation=async(data)=>{
    try{
const service=repository.createReservation(data);
return service;
    }catch(error){
        throw new Error(error.message);
    }
}
