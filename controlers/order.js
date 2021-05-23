const {db,carts, products,orders} =require('../database/models');


async function getorderBydealerId(dealerId){
    const data=await orders.findAll({
        include:[products],
        where:{
            dealerId:dealerId
        }
    })
    return data;
}
async function createOrderProduct(userId,productId,type,quantity,price){
    console.log(userId,productId,type,quantity,price);
    const data=await orders.create({
        userId:userId,
        productId:productId,
        type:type,
        quantity:quantity,
        price:price
        
    })
    return data;
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