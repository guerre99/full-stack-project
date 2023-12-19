import { useState, useEffect } from 'react'
import userService from 'src/services/user-service'

function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    userService
      .get()
      .then(({ data }) => setUsers(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { users, loading, errors, setUsers }
}

export default useUsers
