const {changetopayload} = require('../helpers/jwt')
const {User} = require('../models')

const Authentikasi = async (req,res,next)=>{
    try {
        const token = req.headers.access_token
        if (!token) {
            throw { name : 'JsonWebTokenError'}
        }
        const verify= changetopayload(token)
        
        const user =  await User.findOne({
          where:{
              username : verify.username,
              id : verify.id
            }
        })
        if (!user) {
            throw { name : 'UserNotFound'}
        }

        req.user = {
            username : user.username,
            id : user.id
        }

        next()
    } catch (err) {
        console.log(err)
        next(err)
    }

}

module.exports = { Authentikasi }