const Product = require("./Product")
const Category = require("./Category")
const Cart = require("./Cart")
const User = require("./User")
<<<<<<< HEAD
=======
const Purchase = require("./Purchase")
const ProductImg = require("./ProductImg")
>>>>>>> master

//Product -> //categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

<<<<<<< HEAD

Cart.belongsTo(User)
User.hasOne(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)
=======
//Cart -> //userId
Cart.belongsTo(User)
User.hasOne(Cart)

//Cart -> //productId
Cart.belongsTo(Product)
Product.hasMany(Cart)

//Purchase -> //userId
Purchase.belongsTo(User)
User.hasMany(Purchase)

//Purchase -> //productId
Purchase.belongsTo(Product)
Product.hasMany(Purchase)

//ProductImg -> //productid
ProductImg.belongsTo(Product)
Product.hasMany(ProductImg)
>>>>>>> master
