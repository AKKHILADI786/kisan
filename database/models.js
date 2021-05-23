const Sequelize=require('sequelize')

const data=Sequelize.DataTypes

// const db;
// if(process.env.DATABASE_URL){
//     db=new Sequelize(process.env.DATABASE_URL)
//   }
//   else{
//     db=new Sequelize({
//       dialec:'sqlite',
//       storage:__dirname+'/database.db'
//     })
//   }
  

const db=new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/database.db'
})

if(process.env.DATABASE_URL){
    db=new Sequelize(process.env.DATABASE_URL)
  }


const ID={
    type:data.INTEGER,
    primaryKey:true,
    autoIncrement:true
}

const users=db.define('user',{
    id:ID,
    name:{
        type:data.STRING(50),
        allowNull:false,
    },
    username:{
        type:data.STRING(20),
        allowNull:false,
        unique: true
    },
    password:{
        type:data.STRING(40),
        allowNull:false
    },
    email:{
        type:data.STRING(20),
        allowNull:false
    },
    phone:{
        type:data.STRING(10)
    },
    address:{
        type:data.STRING(300)
    },
    city:{
        type:data.STRING(40)
    },
    state:{
        type:data.STRING(40)
    },
    pincode:{
        type:data.STRING(6)
    }
})




const products=db.define('product',{
    id:ID,
    name:{
        type:data.STRING(50),
        allowNull:false,
    },
    type:{
        type:data.STRING(20),
        allowNull:false,
    },
    price:{
        type:data.INTEGER,
        allowNull:false
    },
    image:{
        type:data.STRING(40)
    }
})

const orders=db.define('order',{
    id:ID,
    quantity:{
        type:data.INTEGER(5),
        defaultValue:1
    },
    price:{
        type:data.INTEGER(5),
        allowNull:false
    },
    type:{
        type:data.STRING(5),
        allowNull:false
    }
})


const carts=db.define('cart',{
    id:ID
})


users.hasOne(carts)
carts.belongsTo(users)

products.hasMany(carts)
carts.belongsTo(products)



products.hasMany(orders)
orders.belongsTo(products)


users.hasMany(orders)
orders.belongsTo(users)


orders.hasMany(carts)
carts.belongsTo(orders)




module.exports={
    db,users,products,orders,carts
}