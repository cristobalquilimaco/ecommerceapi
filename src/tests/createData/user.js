const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Cristobal",
        lastName: "Lopez",
        email: "quilimacox1@gmail.com",
        password: "1234",
        phone: "12234567"
    }

    await User.create(userCreate)

}
module.exports = user