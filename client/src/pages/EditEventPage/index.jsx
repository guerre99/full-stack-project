import { Stack, Typography } from '@mui/material'
import _ from 'lodash'

import { Form, Map } from 'components'

import { fields, schema } from './form-data'

import { useState } from 'react'

import eventService from 'services/event-service'
import { useParams } from 'react-router-dom'
import { useEvent } from 'src/hooks'

function EditEventPage() {
  const { eventId } = useParams()
  const { event, loadingEvent, errors } = useEvent(eventId)
  const [errorsFromResponse, setErrorsFromResponse] = useState([])

  const onSubmit = (event) => {
    console.log(event, 'event que envio')
    eventService
      .update(eventId, event)
      .then(() => reset())
      .catch((err) => {
        const { data, status } = err.response
        if (status === 400) setErrorsFromResponse(data)
      })
  }

  if (loadingEvent) return 'hola'

  const defaultValues = _.pick(event, ['city', 'date', 'ubication'])

  return (
    <Stack spacing={3}>
      <Typography variant="h2" component="h2">
        Editar nuevo evento
      </Typography>

      <Form
        inputs={fields}
        onSubmit={onSubmit}
        validationSchema={schema}
        errorsFromResponse={errorsFromResponse}
        submitLabel="Editar"
        defaultValues={defaultValues}
      />

      <Map event={event} />
    </Stack>
  )
}

export default EditEventPage
