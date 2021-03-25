const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

function verifyUserForJwt(token) {
    console.log(token + "return");
    const user = jwt.verify(token, process.env.SECRET_JWT);
    console.log(user);
    return { email: user.email, password: user.password }
}

function createToken(user) {
    console.log(user)
    return jwt.sign({ email: user.email, password: user.password }, process.env.SECRET_JWT)
}

module.exports = { verifyUserForJwt, createToken }