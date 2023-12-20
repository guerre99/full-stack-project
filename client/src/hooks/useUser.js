import { useState, useEffect } from 'react'
import userService from 'src/services/user-service'

function useUser(userId) {
  const [user, setuser] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    userService
      .getById(userId)
      .then(({ data }) => setuser(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { user, loading, errors }
}

export default useUser
