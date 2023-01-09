require ('dotenv').config()

const http = require('http')
const app = require('./app')

const port = process.env.port
const host = process.env.host

// const server = http.createServer( (req,res) =>{
//     if(req.url == "/"){
//         res.write('hi')
//     }
// } )

const server = http.createServer(app)

server.listen(port ,()=>{
    console.log(`listening on ${host} :: ${port}`)
})  