const jwt = require("jsonwebtoken");

function changetopayload(token) {
   return jwt.verify(token, "Secret")
}

function maketoken(obj) {
    return  jwt.sign(obj,"Secret")
}

module.exports = {changetopayload , maketoken}