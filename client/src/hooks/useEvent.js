import { useState, useEffect } from 'react'
import eventService from 'src/services/event-service'

function useEvent(eventId) {
  const [event, setEvent] = useState({})
  const [loadingEvent, setLoading] = useState(true)
  const [errorsEvent, setErrors] = useState(null)

  const fetchData = () => {
    setLoading(true)
    eventService
      .getById(eventId)
      .then(({ data }) => setEvent(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetchEvent = () => {
    fetchData()
  }

  return { event, loadingEvent, errorsEvent, refetchEvent }
}

export default useEvent
