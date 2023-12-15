const mongoose = require('mongoose')
const { body } = require('express-validator')

const eventSchema = new mongoose.Schema({
  city: { type: String, required: true },
  ubication: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
})

const Event = mongoose.model('Event', eventSchema)

const commonValidationSchema = [
  body('city').isString().notEmpty().withMessage('La ciudad es obligatoria'),
  body('ubication')
    .isString()
    .notEmpty()
    .withMessage('La ubicación es obligatoria'),
  body('date').isDate().notEmpty().withMessage('La fecha es obligatoria'),
  body('participants.*').isMongoId().withMessage('ID de vehiculo no válido'),
]

exports.Event = Event
exports.commonValidationSchema = commonValidationSchema
