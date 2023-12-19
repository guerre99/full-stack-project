import { Stack, Typography } from '@mui/material'

import { Form } from 'components'

import { fields, schema } from './form-data'

import { useState } from 'react'

import vehicleService from 'src/services/vehicle-service'

function NewVehiclePage() {
  const [errorsFromResponse, setErrorsFromResponse] = useState([])

  const onSubmit = (vehicle, { reset }) => {
    console.log('enviar', vehicle)
    vehicleService
      .create(vehicle)
      .then(() => reset())
      .catch((err) => {
        if (err.response.status === 400)
          setErrorsFromResponse(err.response.data)
      })
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h2" component="h2">
        Nuevo Vehículo{' '}
      </Typography>

      <Form
        inputs={fields}
        onSubmit={onSubmit}
        validationSchema={schema}
        errorsFromResponse={errorsFromResponse}
        submitLabel="Entrar"
      />
    </Stack>
  )
}

export default NewVehiclePage
