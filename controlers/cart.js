const {db,users,dealers,carts, products} =require('../database/models');


async function getcartByuserId(userId){
    const data=await carts.findAll({
        include:[products],
        where:{
            userId
        }
    })
    return data;
}
async function createCartProduct(userId,productId,orderId){
    console.log(userId,productId,orderId);
    const data=await carts.create({
        userId:userId,
        productId:productId,
        orderId:orderId
    })
    return data;
}

async function deleteCartProductbyId(productId){
    const data=carts.destroy({
        where:{
            productId:productId
        }
    })
    return data;
}
async function deleteCartUserbyId(userId){
    const data=carts.destroy({
        where:{
            userId:userId
        }
    })
    return data;
}


module.exports={
    createCartProduct,getcartByuserId,deleteCartProductbyId,deleteCartUserbyId

}