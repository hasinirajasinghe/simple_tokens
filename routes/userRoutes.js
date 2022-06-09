const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

// Fetches all the users 
router.get('/', userCtrl.getAllUsers)

// Offers a new form to create a user
router.get('/sign-up', userCtrl.showSignUpPage)

// Creates new user 
router.post('/', userCtrl.createNewUser)

// Offers a new form to log in 
// Use it for local 
router.get('/log-in', userCtrl.showLogInPage)

// Logs in the user
router.post('/log-in', userCtrl.logInUser)

// Add to cart
router.put('/:id/shopping-cart', userCtrl.addToCart)

// Fetches user by user ID 
router.get('/:id', userCtrl.getUserById)


module.exports = router