const { Router } = require('express')

const userController = require('../controllers/users')

const { userValidationSchema } = require('../models/user')
const validate = require('../middlewares/validate')
const validateParamId = require('../utils/validateParamId')
const admin = require('../middlewares/admin')
const auth = require('../middlewares/auth')

const router = Router()

router.get('/', auth, admin, userController.getAll)

router.get('/:userId', auth, userController.getOne)

router.post(
  '/register',
  userValidationSchema,
  validate,
  userController.register
)
router.post('/login', userValidationSchema, validate, userController.login)
router.put('/update', auth, userController.updateUser)
router.delete(
  '/delete/:userId',
  auth,
  admin,
  validateParamId('userId'),
  validate,
  userController.deleteUser
)

module.exports = router
