const {db,users,dealers,products} =require('../database/models');
const { Op } = require("sequelize");

async function createproduct(name,type,price,image){
    
    
   const data= await products.create({
        name,
        type,
        price,
        image
     })
     return data;
}



async function getByType(type){
    const data=await products.findAll({
        where:{
            type:type
        }
    })
    return data;
}

async function getbyproductid(productId){
    const data=products.findByPk(productId)
    return data;
}


module.exports={
    getByType,getbyproductid
}