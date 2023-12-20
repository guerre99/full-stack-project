import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Button,
  Stack,
  Typography,
  CircularProgress,
  TextField,
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { useAuth } from 'hooks'
import { EventCard } from 'src/components'
import { useEvents } from 'hooks'
import eventService from 'src/services/event-service'

function EventsPage() {
  const [user] = useAuth()
  const { events, loading, errors, setEvents } = useEvents()
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleDetail = ({ _id: EventIdToEdit }) =>
    navigate('/events/' + EventIdToEdit)
  const handleEdit = ({ _id: EventIdToEdit }) =>
    navigate('/event/edit/' + EventIdToEdit)
  const handleDelete = ({ _id: EventIdToDelete }) =>
    eventService
      .delete(EventIdToDelete)
      .then(() =>
        setEvents(events.filter((event) => event._id !== EventIdToDelete))
      )
      .catch((err) => {
        if (err.response.status === 400)
          setErrorsFromResponse(err.response.data)
      })

  if (loading) return <CircularProgress />

  const filteredEvents = events.filter((event) => {
    return (
      event &&
      event.city &&
      event.city.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Eventos
        </Typography>
        <Stack spacing={2} direction={'row'}>
          {user.admin ? (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Add />}
              component={Link}
              to="/event/new"
            >
              Nuevo Evento
            </Button>
          ) : (
            []
          )}
        </Stack>
      </Stack>
      <TextField
        label="Buscar evento"
        variant="filled"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{
          sx: { backgroundColor: '#ffffff', borderRadius: '10px' },
        }}
      />
      <Stack
        display="flex"
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-start"
      >
        {filteredEvents.map((event) => (
          <EventCard
            key={event._id}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDetail={handleDetail}
            event={event}
          />
        ))}
      </Stack>
    </Stack>
  )
}
export default EventsPage
