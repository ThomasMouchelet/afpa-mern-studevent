const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users.controller')

router.get('/users', UsersController.getAllUsers)
router.get('/users/:id', UsersController.getOneUserById)
router.post('/users', UsersController.createUser)
router.patch('/users/:id', UsersController.updateUserById)
router.delete('/users/:id', UsersController.deleteUserById)

module.exports = router