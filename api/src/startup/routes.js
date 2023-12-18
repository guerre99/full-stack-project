require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

const cors = require('cors')

const helmet = require('helmet')
const compression = require('compression')

const errors = require('../middlewares/errors')

module.exports = function (app) {
  app.use(helmet())
  app.use(compression())

  app.use(cors())
  app.use(json())
  app.use(morgan('tiny'))

  app.use('/api/users', require('../routes/users'))
  app.use('/api/events', require('../routes/events'))
  app.use('/api/vehicles', require('../routes/vehicles'))

  app.get('/ping', (req, res) => {
    res.json({ status: 'success' })
  })

  app.use(errors)
}
