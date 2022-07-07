const express = require('express')
const router = express.Router()
const EventsController = require('../controllers/events.controller')

router.get('/events', EventsController.getAllEvents)
router.get('/events/:id', EventsController.getOneEventById)
router.post('/events', EventsController.createEvent)
router.patch('/events/:id', EventsController.updateEventById)
router.delete('/events/:id', EventsController.deleteEventById)

module.exports = router