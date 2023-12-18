import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Table, EventCard } from 'src/components'
import { useEvents } from 'hooks'
import eventService from 'src/services/event-service'

function EventsPage() {
  const { events, loading, errors, setEvents } = useEvents()

  const navigate = useNavigate()

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

  const list = () => {
    return (
      <Table
        columns={[
          {
            label: 'Nombre',
            path: 'name',
          },
          {
            label: 'latitude',
            path: 'latitude',
            props: {
              align: 'right',
            },
          },
          {
            label: 'longitude',
            path: 'longitude',
            props: {
              align: 'right',
            },
          },
        ]}
        rows={events}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    )
  }

  if (loading) return <CircularProgress />

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Eventos
        </Typography>
        <Stack spacing={2} direction={'row'}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            component={Link}
            to="/event/new"
          >
            Nuevo Cliente
          </Button>
        </Stack>
      </Stack>

      <Stack
        display="flex"
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-start"
      >
        <EventCard />
      </Stack>
    </Stack>
  )
}
export default EventsPage
