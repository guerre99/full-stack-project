import { useState, useEffect } from 'react'
import vehicleService from 'src/services/vehicle-service'

function useVehicle(vehicleId) {
  const [vehicle, setVehicle] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    vehicleService
      .getById(vehicleId)
      .then(({ data }) => setVehicle(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { vehicle, loading, errors }
}

export default useVehicle
