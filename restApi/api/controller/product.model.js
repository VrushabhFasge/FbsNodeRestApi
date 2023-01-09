const mongoose = require('mongoose')
const Product = require('../routes/models/product')

exports.getProduct = async (req,res,next) =>{
    try {
        const product = await Product.find() //get all documents
        res.status(200).json({
            msg:"Product documents fetchd successfully",
            data:product
        })
    } catch (error) {
        console.log('error occured',error)
    }
}

exports.getProductById = async (req,res,next) =>{
    try {
        let id = req.params.productId
        const productById = await Product.findById(id)
        let msgOutput = productById == null ? 'No document found !!' : 'Single document fetched successfully.'
        res.status(200).json({
            msg:msgOutput,
            data:productById
        })
    } catch (error) {
        console.log('error occured',error)
    }
}

exports.updateProduct = async (req,res) =>{
    try {

        let productData = await Product.findByIdAndUpdate(req.params.productId,req.body)
        res.status(200).json({
            msg:"Product updated successfully",
            data:productData
        })
        
    } catch (error) {
        console.log('error occusred',error)
        res.status(501).json({
            msg:"Product updating failed"
        })
    }
}

exports.createProduct = async (req,res,next) =>{
    try {

        //creating a product
        const prod = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
          });

          
          const data = await prod.save()   //calling the save method and wating for it to return
          //if it comes here means save was sucessfull 
          res.status(200).json({
            create:"Product created successfully",
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

exports.deleteProduct = async (req,res,next) =>{
    try {

        const data = await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            data :data,
            msg:"Product deleted successfully",
            
        })
        
    } catch (error) {
        res.status(501).json({
            msg:"Something went wrong while deleting",
            err:error,
            code : 0
        })
    }
}