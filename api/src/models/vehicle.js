const mongoose = require('mongoose')
const { body } = require('express-validator')

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  engine: {
    type: { type: String, required: true },
    power: { type: String, required: true },
  },
  vehicleImage: { type: String },
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

const vehicleValidationSchema = [
  body('model').isString().notEmpty().withMessage('El modelo es obligatorio'),
  body('year').isNumeric().notEmpty().withMessage('El año es obligatorio'),
  body('engine').isObject().notEmpty().withMessage('El motor es obligatorio'),
  body('engine.type')
    .isString()
    .notEmpty()
    .withMessage('El tipo de motor es obligatorio'),
  body('engine.power')
    .isString()
    .notEmpty()
    .withMessage('La potencia del motor es obligatoria'),
]

exports.Vehicle = Vehicle

exports.vehicleValidationSchema = vehicleValidationSchema
