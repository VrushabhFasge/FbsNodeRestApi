const mongoose = require('mongoose')
const Order = require('../routes/models/order')

exports.getOrder = async (req,res,next) =>{
    try {
        const order = await Order.find() //get all documents
        res.status(200).json({
            msg:"Order documents fetchd successfully",
            data:order
        })
    } catch (error) {
        console.log('error occured',error)
    }
}

exports.getOrderById = async (req,res,next) =>{
    try {
        let id = req.params.orderId
        const orderById = await Order.findById(id)
        let msgOutput = orderById == null ? 'No document found !!' : 'Single document fetched successfully.'
        res.status(200).json({
            msg:msgOutput,
            data:orderById
        })
    } catch (error) {
        console.log('error occured',error)
    }
}

exports.updateOrder = async (req,res) =>{
    try {

        let orderData = await Order.findByIdAndUpdate(req.params.orderId,req.body)
        res.status(200).json({
            msg:"Order updated successfully",
            data:orderData
        })
        
    } catch (error) {
        console.log('error occusred',error)
        res.status(501).json({
            msg:"Order updating failed"
        })
    }
}

exports.createOrder = async (req,res,next) =>{
    try {

        //creating a product
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            orderId: req.body.orderId,
          });

          
          const data = await order.save()   //calling the save method and wating for it to return
          //if it comes here means save was sucessfull 
          res.status(200).json({
            create:"Order created successfully",
            prod : data
          })
        
    } catch (error) { 
        console.log('error occured',error)
        res.status(501).json({
            code:0,
            create:"Something went wrong. Please check console",
        
          })
    }
}

exports.deleteOrder = async (req,res,next) =>{
    try {

        const data = await Order.findByIdAndDelete(req.params.orderId)
        res.status(200).json({
            data :data,
            msg:"Order deleted successfully",
            
        })
        
    } catch (error) {
        res.status(501).json({
            msg:"Something went wrong while deleting",
            err:error,
            code : 0
        })
    }
}