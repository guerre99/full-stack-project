import { useState, useEffect } from 'react'
import eventService from 'src/services/event-service'

function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    eventService
      .get()
      .then(({ data }) => setEvents(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { events, loading, errors, setEvents }
}

export default useEvents
