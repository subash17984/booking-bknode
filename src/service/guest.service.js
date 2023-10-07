const repository=require("../repository/guest.repository");
const reservationRepository=require("../repository/reservation.repository");
exports.userSignUp=async(data)=>{
    try{
const responseData=repository.userSignUp(data);
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
};

exports.findOneByuser=async(data)=>{
    try{
const responseData=repository.findOneByUser(data);
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
};

exports.ownerCreateProperty=async(data)=>{
    try{
const responseData= await repository.ownerCreateProperty(data);
return responseData;
    }catch(error){
        throw new Error(error.message);
    }
};
exports.createReservation=async(data)=>{
    try{
const service=reservationRepository.createReservation(data);
return service;
    }catch(error){
        throw new Error(error.message);
    }
}