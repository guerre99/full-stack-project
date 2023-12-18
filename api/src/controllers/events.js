const { Event } = require('../models/event')

const getAll = async (req, res) => {
  const events = await Event.find()
  res.json(events)
}

const getOne = async (req, res) => {
  const { eventId } = req.params

  const event = await Event.findById(eventId)
  if (!event) {
    return res.status(404).json({ message: 'Evento no encontrado' })
  }

  res.json(event)
}

const create = async (req, res) => {
  const newEvent = await Event.create({
    ...req.body,
  })
  res.json(newEvent)
}

const update = async (req, res) => {
  const { eventId } = req.params

  const updates = { ...req.body }
  const oldEvent = await Event.findByIdAndUpdate(eventId, updates)
  if (!oldEvent) {
    return res.status(404).json({ message: 'Evento no encontrado' })
  }
  const updatedEvent = { eventId, ...updates }

  res.json(updatedEvent)
}

const updateParticipants = async (req, res) => {
  const { eventId } = req.params
  const updates = { participants: req.body.participants }

  const updatedEvent = await Event.findByIdAndUpdate(eventId, updates, {
    new: true,
  })

  if (!updatedEvent) {
    return res.status(404).json({ message: 'Evento no encontrado' })
  }

  res.json(updatedEvent)
}

const deleteOne = async (req, res) => {
  const { eventId } = req.params
  const deletedEvent = await Event.findByIdAndDelete(eventId)
  if (!deletedEvent) {
    return res.status(404).json({ message: 'Evento no encontrado' })
  }

  res.json(deletedEvent)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  updateParticipants,
  deleteOne,
}
