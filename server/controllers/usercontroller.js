const {User} = require('../models')
const compare = require('../helpers/bcrypt')
const {maketoken} = require('../helpers/jwt')

class UserController {
    static async register(req,res,next){
        try {
            const {username,password} = req.body
            const user = await User.create({username,password})
           
           
            res.status(201).json({
                username : user.username,
            })
        } catch (err) {
           next(err)
        }
    }

    static async login(req,res,next){ 
        try {
            const {username,password} = req.body
            if (!username) {
                throw {name : `username`}
            }
            if (!password) {
                throw {name : `password`}
            }
            const user = await User.findOne({where : {username}})
            if (!user) {
                throw{name: `wrong`}
            }
            const validPassword = compare(password,user.password)
            if (!validPassword) {
                throw{name: `wrong`}
            }
            const payload ={
                id : user.id,
                username: user.username,
                username: user.username,
                role :user.role
            }
            const access_token = maketoken(payload)
            res.status(200).json({access_token,payload})
        } catch (err) {
            next(err)
        }
    }

    
}




module.exports = UserController