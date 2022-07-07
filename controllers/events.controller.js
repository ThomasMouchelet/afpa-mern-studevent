const Event = require('../models/event.model');

const EventsController = {
    getAllEvents: async (req, res) => {
        try {
            const eventList = await Event.find()
            res.send(eventList)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    getOneEventById: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id)
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    deleteEventById: async (req, res) => {
        try {
            const event = await Event.findByIdAndDelete(req.params.id)
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    updateEventById: async (req, res) => {
        try {
            const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    createEvent: async (req, res) => {
        try {
            const event = new Event(req.body)
            await event.save()
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

module.exports = EventsController;