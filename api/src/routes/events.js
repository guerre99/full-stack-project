const { Router } = require('express')
const eventController = require('../controllers/events')
const { commonValidationSchema } = require('../models/event')

const validateParamId = require('../utils/validateParamId')

const validate = require('../middlewares/validate')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const router = Router()

router.get('/', auth, eventController.getAll)
router.get(
  '/:eventId',
  auth,
  validateParamId('eventId'),
  validate,
  eventController.getOne
)

router.post(
  '/',
  [auth, admin],
  commonValidationSchema,
  validate,
  eventController.create
)

router.put(
  '/:eventId/addParticipant',
  auth,
  validateParamId('eventId'),
  validate,
  eventController.updateParticipants
)

router.put(
  '/:eventId',
  auth,
  admin,
  validateParamId('eventId'),
  commonValidationSchema,
  validate,
  eventController.update
)

router.delete(
  '/:eventId',
  auth,
  admin,
  validateParamId('eventId'),
  validate,
  eventController.deleteOne
)

module.exports = router
