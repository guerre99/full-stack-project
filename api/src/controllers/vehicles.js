const { Vehicle } = require('../models/vehicle')

const getAll = async (req, res) => {
  const vehicles = await Vehicle.find({ rider: req.user._id })
  res.json(vehicles)
}

const getOne = async (req, res) => {
  const { vehicleId } = req.params
  const vehicle = await Vehicle.findById(vehicleId).populate('visits')
  if (!vehicle) {
    return res.status(404).json({ message: 'Vehiculo no encontrado' })
  }
  res.json(vehicle)
}

const create = async (req, res) => {
  const { model, year, engine, vehicleImage } = req.body
  const { type, power } = engine
  const newVehicle = await Vehicle.create({
    model,
    year,
    engine: { type, power },
    vehicleImage,
  })

  res.json(newVehicle)
}

const update = async (req, res) => {
  const { vehicleId } = req.params
  const updates = req.body
  const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, updates, {
    new: true,
  })
  if (!updatedVehicle) {
    return res.status(404).json({ message: 'Vehicle no encontrado' })
  }
  res.json(updatedVehicle)
}

const deleteOne = async (req, res) => {
  const { vehicleId } = req.params

  const deletedVehicle = await Vehicle.findOneAndDelete({
    _id: vehicleId,
  })

  if (!deletedVehicle) {
    return res.status(404).json({ message: 'Vehicle no encontrado' })
  }

  res.json(deletedVehicle)
}

module.exports = { getAll, getOne, create, update, deleteOne }
