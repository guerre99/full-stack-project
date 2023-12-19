import { Stack, Typography } from '@mui/material'

import { Form } from 'components'

import { fields, schema } from './form-data'

import { useState } from 'react'

import eventService from 'services/event-service'

function AddEventPage() {
  const [errorsFromResponse, setErrorsFromResponse] = useState([])

  const onSubmit = (event, { reset }) => {
    console.log('enviar', event)
    eventService
      .create(event)
      .then(() => reset())
      .catch((err) => {
        if (err.response.status === 400)
          setErrorsFromResponse(err.response.data)
      })
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h2" component="h2">
        Añadir nuevo evento
      </Typography>

      <Form
        inputs={fields}
        onSubmit={onSubmit}
        validationSchema={schema}
        errorsFromResponse={errorsFromResponse}
        submitLabel="Crear"
      />
    </Stack>
  )
}

export default AddEventPage
