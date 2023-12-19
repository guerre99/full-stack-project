import { useState, useEffect } from 'react'
import vehicleService from 'src/services/vehicle-service'

function useVehicles() {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    vehicleService
      .get()
      .then(({ data }) => setVehicles(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { vehicles, loading, errors, setVehicles }
}

export default useVehicles
