import * as React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Stack,
  Typography,
  CircularProgress,
  TextField,
} from '@mui/material'
import { useEvent, useUser, useAuth } from 'hooks'
import { Map, Form, VehicleCard } from 'components'

import { getFields, schema } from './form-data'
import eventService from 'src/services/event-service'

function EventPage() {
  const [{ id }] = useAuth()
  const { user, loading, errors } = useUser(id)
  const { eventId } = useParams()
  const { event, loadingEvent, errorsEvent, refetchEvent } = useEvent(eventId)

  const [errorsFromResponse, setErrorsFromResponse] = useState([])
  const [participantes, setParticipantes] = useState(event.participants || [])

  let fecha = new Date(event.date)
  let dia = fecha.getDate()
  let mes = fecha.getMonth()
  let año = fecha.getFullYear()

  const onSubmit = (participant, { reset }) => {
    eventService
      .addParticipant(eventId, participant)
      .then(() => {
        reset()
        refetchEvent()
      })
      .catch((err) => {
        const { data, status } = err.response
        if (status !== 400) return
        setErrorsFromResponse(data)
      })
  }

  useEffect(() => {
    setParticipantes(event.participants || [])
  }, [event.participants])

  if (loadingEvent || loading) return <CircularProgress />

  let fields = getFields(
    user?.vehicles?.map((vehicle) => ({
      model: vehicle.model,
      _id: vehicle._id,
    }))
  )

  return (
    <Stack spacing={3} sx={{ mb: '20px' }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h2">
          Evento {event.city} : {dia}-{mes}-{año}
        </Typography>
      </Stack>
      <Map event={event} />
      <Form
        inputs={fields}
        onSubmit={onSubmit}
        validationSchema={schema}
        errorsFromResponse={errorsFromResponse}
        submitLabel="Participar"
      />
      <Typography variant="h2" component="h3">
        Participantes
      </Typography>
      {event.participants.map((participant) => (
        <VehicleCard key={participant._id} vehicle={participant} />
      ))}
    </Stack>
  )
}
export default EventPage
