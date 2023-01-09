const express = require('express')
const routerOrder = express.Router()
const mongoose = require('mongoose')
const orderHandler = require('../controller/order.model')

routerOrder.get('/' , orderHandler.getOrder
// (req,res,next) =>{
//     res.status(200).json({
//         msg:"This is Get request for order"
//     })
// }
)

routerOrder.post('/', orderHandler.createOrder
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is post request for order"
//     })
// }
)

routerOrder.get('/:orderId' , orderHandler.getOrderById
// (req,res,next)=>{
//     const id = req.params.orderId

//     if(id == '7'){
//         res.status(200).json({
//             msg:"order in transit"
//         })
//     }
//     else{
//         res.status(200).json({
//             msg:"order not dispatched"
//         })
//     }

// }
)

routerOrder.put('/:orderId', orderHandler.updateOrder
// (req,res,next) =>{
//     const id = req.params.orderId

//     res.status(200).json({
//         msg:"This is a put request for orderId",
//         id:id
//     })
// }
)

routerOrder.delete('/:orderId',orderHandler.deleteOrder
//  (req,res,next) => {
//     const id = req.params.orderId
//         res.status(200).json({
//         msg:"this is delete record for order",
//         id:id
//     })
// }
) 

module.exports = routerOrder
