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
  '/addParticipant/:eventId',
  auth,
  validateParamId('eventId'),
  commonValidationSchema,
  validate,
  eventController.updateParticipants
)

router.put(
  '/editEvent/:eventId',
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
