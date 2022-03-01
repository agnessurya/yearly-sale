const route = require('express').Router();
const errorHandler = require('../middleware/errorHandler')
const UserController = require('../controllers/usercontroller');
const SaleController = require('../controllers/salecontroller.js')
const  {Authentikasi} = require('../middleware/auth')

//for user
route.post('/register',UserController.register)
route.post('/login', UserController.login)


route.use(Authentikasi)
route.get('/sales', SaleController.findAllSales)


route.use(errorHandler)
module.exports = route