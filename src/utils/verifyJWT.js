const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
<<<<<<< HEAD
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1]; 
=======

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];

>>>>>>> master
    jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
<<<<<<< HEAD
            if (err) return res.sendStatus(403);
=======
            if (err) return res.sendStatus(403); //✅
>>>>>>> master
            req.user = decoded.user;
            next();
        }
    )
}

module.exports = verifyJWT;