const {db,carts, products,orders} =require('../database/models');
const { Op } = require("sequelize");
const {getcartByuserId,createCartProduct,deleteCartProductbyId,deleteCartUserbyId}=require('./cart')

async function getorderBydealerId(dealerId){
    const data=await orders.findAll({
        include:[products],
        where:{
            dealerId:dealerId
        }
    })
    return data;
}
async function getbuy(productId,price){
    const data=await orders.findAll({
        where:{
            productId:productId,
            type:'Buy',
            price:{
                [Op.gte]:price
            }
        }
    })
    //console.log(data);
    return data;
}
async function getsell(productId,price){
    const data=await orders.findAll({
        where:{
            productId:productId,
            type:'Sell',
            price:{
                [Op.lte]:price
            }
        }
    })
    //console.log(data);
    return data;
}
async function createOrderProduct(userId,productId,type,quantity,price){
    console.log(userId,productId,type,quantity,price);
    if(type=='Buy'){
        const data=await getsell(productId,price);
        if(data.length>0){
            console.log(data[0].id)
            
            const dat=await createCartProduct(userId,productId,data[0].id);
            return dat;
            
        }
        else{
            const data=await orders.create({
                userId:userId,
                productId:productId,
                type:type,
                quantity:quantity,
                price:price
            })
            
            return data;
        }
    }
    else{
        const data=await getbuy(productId,price);
        if(data.length>0){
            const dat=await createCartProduct(userId,productId,data[0].id);
            return dat;
        }
        else{
            const data=await orders.create({
                userId:userId,
                productId:productId,
                type:type,
                quantity:quantity,
                price:price
            })
            
            return data;

        }
    }
   
}

async function deleteOrderProductId(productId){
    const data=orders.destroy({
        where:{
            productId:productId
        }
    })
    return data;
}


module.exports={
    createOrderProduct,getorderBydealerId,deleteOrderProductId
}