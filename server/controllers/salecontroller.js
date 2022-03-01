const {Sale} = require('../models')

class UserController {
    static async findAllSales(req,res,next){
        try {
            
            const sales = await Sale.findAll({attributes: {exclude: ['id','createdAt','updatedAt']}})
           
            res.status(201).json(sales)
        } catch (err) {
           next(err)
        }
    }
    
}




module.exports = UserController