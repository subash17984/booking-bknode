module.exports=(sequelize,Sequelize)=>{
    const guestModel=sequelize.define("guest_master",{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey:true,
        },
        emailId:{
            type:Sequelize.STRING,
            unique:true,
            // required:true
        },
        phoneNumber:{
            type:Sequelize.STRING,
            unique:true,
            // required:true
        },
        isFlag:{
            type:Sequelize.BOOLEAN,
        }
    });
    return guestModel;
}