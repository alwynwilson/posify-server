const express = require('express')
const userController = require('../Controllers/userController')
const productController = require('../Controllers/productController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()

//register http://localhost:3000/register
router.post('/register',userController.registerController)

//login - http://localhost/login
router.post('/login',userController.loginController)

//product section
router.get('/allproducts',jwtMiddleware,productController.getAllProductsController)

module.exports = router