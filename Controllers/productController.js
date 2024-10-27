const products = require('../Models/productModel')

// get all product controller
exports.getAllProductsController = async (req, res) => {
    console.log("Inside all product controller");

    // Get the search query from the request
    const searchKey = req.query.search || ''; // Default to empty string if no search key
    try {
        // If searchKey is provided, filter products accordingly
        const query = searchKey ? { productName: { $regex: searchKey, $options: 'i' } } : {}; // Change 'name' to the appropriate field
        console.log(query)
        const existingProducts = await products.find(query);
        console.log(existingProducts)

        res.status(200).json(existingProducts);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(401).json({ error: "Error fetching products" }); // More descriptive error message
    }
};

