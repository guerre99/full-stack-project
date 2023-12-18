const { Router } = require('express')

const userController = require('../controllers/users')

const { userValidationSchema } = require('../models/user')
const validate = require('../middlewares/validate')
const validateParamId = require('../utils/validateParamId')
// const admin = require('../middlewares/admin')

const router = Router()

router.post(
  '/register',
  userValidationSchema,
  validate,
  userController.register
)
router.post('/login', userValidationSchema, validate, userController.login)
router.delete(
  '/:userId',
  // admin,
  validateParamId('userId'),
  validate,
  userController.deleteUser
)

module.exports = router
