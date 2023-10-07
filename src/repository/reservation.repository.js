const db=require("../dbconfig/db.config")
const reservation=db.reservation;
exports.createReservation=async(data)=>{
    try{
const reservationData=await reservation.create(data);
return reservationData;
    }catch(error){
        throw new Error(error.message);
    }
}