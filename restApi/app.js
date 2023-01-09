const express = require('express')
const routerOrder = require('./api/routes/orders')
const app = express()

// app.use( (req,res,next) =>{
//     req.statusCode(200).json({
//         msg:"This is a simple get request"
//     })
// } )

const productHandler = require('./api/routes/products')
const orderHandler = require('./api/routes/orders')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

 function connect() {
    const connectionString =
        "mongodb+srv://vrushabh_admin:vrushabh%40123@cluster0.qs1kxyv.mongodb.net/test";
    console.log(connectionString);
    
    mongoose
        .connect(connectionString)
        .then(() => {
        console.log("connection successful...");
        })
        .catch(() => {
        console.log("connection failed !!!");
        });
}
connect()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(morgan('dev'))
app.use('/products' , productHandler)
app.use('/order',orderHandler)

module.exports = app