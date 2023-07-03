<<<<<<< HEAD
const { getAll, create, getOne, remove, update } = require('../controllers/cart.controllers');
const express = require('express');
const verifyJWT = require("../utils/verifyJWT");
=======
const { getAll, create, remove, update } = require('../controllers/cart.controllers');
const express = require('express');
const verifyJWT = require("../utils/verifyJWT")
>>>>>>> master

const routerCart = express.Router();

routerCart.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

routerCart.route('/:id')
<<<<<<< HEAD

=======
>>>>>>> master
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerCart;