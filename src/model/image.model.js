module.exports=(sequelize,Sequelize)=>{
    const imageModel=sequelize.define("image",{
        id:{
            type:Sequelize.BIGINT,
            autoIncrement:true,
            primaryKey:true,
        },
        imageUrl:{
            type:Sequelize.TEXT('long')
        }
    });
    return imageModel;
}