const products = require('../Models/productModel')

// get all product controller
exports.getAllProductsController = async (req,res)=>{
    console.log("Inside all product controller");
    const searchKey = req.query.search
    const query = {
        productName: {
            $regex:searchKey,
            $options:"i"
        }
    }
    try{
        const existingProduct = await products.find(query)
        res.status(200).json(existingProduct)
    }catch(err){
        res.status(401).json(err)
    }
}
