const { Router } = require('express')
const vehicleController = require('../controllers/vehicles')
const { vehicleValidationSchema } = require('../models/vehicle')
const validateParamId = require('../utils/validateParamId')
const validate = require('../middlewares/validate')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const router = Router()

router.get('/', /* auth, */ vehicleController.getAll)

router.get(
  '/:vehicleId',
  validateParamId('vehicleId'),
  validate,
  vehicleController.getOne
)

router.post(
  '/',
  // auth,
  vehicleValidationSchema,
  validate,
  vehicleController.create
)

router.put(
  '/:vehicleId',
  validateParamId('vehicleId'),
  vehicleValidationSchema,
  validate,
  vehicleController.update
)

router.delete(
  '/:vehicleId',
  validateParamId('vehicleId'),
  validate,
  vehicleValidationSchema,
  vehicleController.deleteOne
)

module.exports = router
