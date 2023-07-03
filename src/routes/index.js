const express = require('express');
const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
<<<<<<< HEAD
=======
const routerPurchase = require('./purchase.router');
const routerProductImg = require('./productImg.router');
>>>>>>> master
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/categories', routerCategory)
router.use('/products', routerProduct)
<<<<<<< HEAD
router.use('/products', routerCart)


module.exports =  router;
=======
router.use('/cart', routerCart)
router.use('/purchase', routerPurchase)
router.use('/product_images', routerProductImg)


module.exports = router;
>>>>>>> master
