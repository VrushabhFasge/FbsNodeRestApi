const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const productController = require('../controller/product.model')

// function connect() {
//   const connectionString =
//     "mongodb+srv://vrushabh_admin:vrushabh%40123@cluster0.qs1kxyv.mongodb.net/test";
//   console.log(connectionString);

//   mongoose
//     .connect(connectionString)
//     .then(() => {
//       console.log("connection successful...");
//     })
//     .catch(() => {
//       console.log("connection failed !!!");
//     });
// }

 router.get("/", productController.getProduct
//(req, res, next) => {
//   res.status(200).json({
//     msg: "This is Get request for product",
//   });
// }
);

//codefor post request of product
router.post("/", productController.createProduct 
  // res.status(200).json({
  //     msg:"This is post request for product"
  // })

  // const product = new Product({
  //   _id: new mongoose.Types.ObjectId(),
  //   name: req.body.name,
  //   price: req.body.price,
  // });

  //connecting to db
  //connect()

  //saving the const product to db
  // product
  //   .save()
  //   .then((res) => {
  //     console.log("res...", res);
  //     res.status(200).json({
  //       msg: "Product added successfully",
  //       prod: product,
  //     }); 
  //   })
  //   .catch((err) => { 
  //     console.log(err);
  //   });


  
//}
);

router.get("/:productId", productController.getProductById
//(req, res, next) => {
//   const id = req.params.productId;

//   if (id == "7") {
//     res.status(200).json({
//       msg: "There is special cashback for you",
//     });
//   } else {
//     res.status(200).json({
//       msg: "there is no offer on this product",
//     });
//   }
// }
);

router.put("/:productId", productController.updateProduct
// (req, res, next) => {
//   const id = req.params.productId;

//   res.status(200).json({
//     msg: "This is a put request for product",
//     id: id,
//   });
// }
);

router.delete("/:productId", productController.deleteProduct
// (req, res, next) => {
//   const id = req.params.productId;
//   res.status(200).json({
//     msg: "this is delete record for product",
//     id: id,
//   });
// }
);

module.exports = router;
