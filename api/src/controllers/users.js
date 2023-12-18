const bcrypt = require('bcrypt')

const { User } = require('../models/user')

const register = async (req, res) => {
  const { password: plainTextPassword, username, email, invitedBy } = req.body

  const inviter = await User.findById(invitedBy)

  if (!inviter)
    return res.status(400).json({
      message: 'Invitación inválida',
    })

  const user = await User.findOne({ username })

  if (user)
    return res.status(400).json({
      message:
        'Hemos encontrado un problema con el registro, intente nuevamente',
    })

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(plainTextPassword, salt)

  const newUser = await User.create({ username, email, password, invitedBy })

  const token = newUser.generateJWT()

  res.setHeader('Access-Control-Expose-Headers', 'x-auth-token')
  res.setHeader('x-auth-token', token)
  res.json({ message: 'Usuario registrado y logueado' })
}

const login = async (req, res) => {
  const { password: plainTextPassword, username } = req.body

  const user = await User.findOne({ username })

  if (!user)
    return res
      .status(400)
      .json({ message: 'El usuario y contraseña no coincide' })

  const isValidUser = await bcrypt.compare(plainTextPassword, user.password)

  if (!isValidUser)
    return res
      .status(400)
      .json({ message: 'El usuario y contraseña no coincide' })

  const token = user.generateJWT()

  res.setHeader('Access-Control-Expose-Headers', 'x-auth-token')
  res.setHeader('x-auth-token', token)
  res.json({ message: 'Usuario logueado' })
}

const updateUser = async (req, res) => {}

const deleteUser = async (req, res) => {
  const { userId } = req.params
  const deletedUser = await User.findByIdAndDelete(userId)
  if (!deletedUser) {
    return res.status(404).json({ message: 'Usuario no encontrado' })
  }
}

module.exports = { register, login, deleteUser }
