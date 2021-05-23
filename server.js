const express=require('express')

const expressSession=require('express-session')
const { db } =require('./database/models')
const app=express()
const PORT=process.env.PORT||4444;
const path=require('path')

// for multer 


app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:'asfdasdfasdfsdfasdwqer'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/frontend/build'))

app.use('/user',require('./routes/users/user').uroute)
app.use('/product',require('./routes/product/product').proute)
app.use('/cart',require('./routes/carts/cart').croute)
app.use('/order',require('./routes/orders/order').oroute)


app.use('/images',express.static(__dirname+'/images'))


// app.get('/',(req,res)=>{
//     res.send('jai shree ram')
// })

db.sync({alter:true})
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server started at http://localhost:${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })