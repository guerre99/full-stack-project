import { useState, useEffect } from 'react'
import eventService from 'src/services/event-service'

function useEvent(eventId) {
  const [event, setEvent] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    eventService
      .getById(eventId)
      .then(({ data }) => setEvent(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { event, loading, errors }
}

export default useEvent
