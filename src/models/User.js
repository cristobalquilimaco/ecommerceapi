const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
const bcrypt = require("bcrypt")
>>>>>>> master

const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
<<<<<<< HEAD

=======
>>>>>>> master
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
<<<<<<< HEAD

=======
>>>>>>> master
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
<<<<<<< HEAD

=======
>>>>>>> master
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
<<<<<<< HEAD

=======
>>>>>>> master
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
<<<<<<< HEAD


});


=======
});

>>>>>>> master
User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

User.beforeCreate(async(user)=>{
<<<<<<< HEAD

const hashPassword = await bcrypt.hash(user.password, 10)

user.password = hashPassword

})

module.exports = User;
=======
    const hashPassword = await bcrypt.hash(user.password, 10)
    user.password = hashPassword
})

module.exports = User;

>>>>>>> master
