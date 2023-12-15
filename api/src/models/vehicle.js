const mongoose = require('mongoose')
const { body } = require('express-validator')

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  engine: {
    type: { type: String, required: true },
    Power: { type: Number, required: true },
  },
  vehicleImage: { type: String },
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

const vehicleValidationSchema = [
  body('date')
    .isISO8601()
    .toDate()
    .withMessage('La fecha de jornada no es válida'),
  body('visits.*').isMongoId().withMessage('ID de cliente no válido'),
]

exports.Vehicle = Vehicle

exports.vehicleValidationSchema = vehicleValidationSchema
