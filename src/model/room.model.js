module.exports=(sequelize,Sequelize)=>{
    const roomModel=sequelize.define("room",{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey:true,
        },
        roomNo:{
            type:Sequelize.INTEGER,
            // unique:true,
        },
        minStay:{
            type:Sequelize.INTEGER
        },
        maxStay:{
            type:Sequelize.INTEGER
        },
        depositAmount:{
            type:Sequelize.INTEGER
        },
        availableFrom:{
            type:Sequelize.DATE
        },
        isAvailable:{
            type:Sequelize.BOOLEAN
        },
        ownerDeleteFlag:{
            type:Sequelize.BOOLEAN
        }
    });
    return roomModel;
}