const User = require('../models/user.model');

const UsersController = {
    getAllUsers: async (req, res) => {
        try {
            const usersList = await User.find()
            res.send(usersList)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    getOneUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.send(user)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    createUser: async (req, res) => {
        try {
            const user = new User(req.body)
            await user.save()
            res.send(user)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    updateUserById: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.send(user)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    deleteUserById: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.send(user)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

module.exports = UsersController;