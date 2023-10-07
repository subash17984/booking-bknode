module.exports=(sequelize,Sequelize)=>{
    const reservationModel=sequelize.define("reservation",{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey:true,
        },
        roomId:{
            type:Sequelize.INTEGER
        },
        checkoutDate:{
            type:Sequelize.DATE
        },
        chekcInDate:{
            type:Sequelize.DATE
        },
      pricePerDay:{
        type:Sequelize.INTEGER
      },
      isConfirmed:{
        type:Sequelize.BOOLEAN
      }  
    });
return reservationModel;
}