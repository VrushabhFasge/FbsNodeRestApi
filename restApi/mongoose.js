const mongoose = require('mongoose')

const connectionString = "mongodb+srv://vrushabh_admin:vrushabh%40123@cluster0.qs1kxyv.mongodb.net/test"
console.log(connectionString)

mongoose.connect(connectionString)
.then( ()=>{
    console.log("connection successful...")
} )
.catch( ()=>{
    console.log('connection failed !!!')
} )