import { CircularProgress, Stack, Typography } from '@mui/material'

import { Form } from 'components'

import _ from 'lodash'

import { fields, schema } from './form-data'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useVehicle } from 'src/hooks'

import vehicleService from 'src/services/vehicle-service'

function EditVehiclePage() {
  const { vehicleId } = useParams()

  const { vehicle, loading, errors } = useVehicle(vehicleId)

  const [errorsFromResponse, setErrorsFromResponse] = useState([])

  const onSubmit = (vehicle) => {
    vehicleService
      .update(vehicleId, vehicle)
      .then(() => {})
      .catch((err) => {
        const { data, status } = err.response
        if (status !== 400) return
        setErrorsFromResponse(data)
      })
  }

  if (loading) return <CircularProgress />

  const defaultValues = _.pick(vehicle, [
    'model',
    'year',
    'engine.type',
    'engine.power',
    'image',
  ])

  return (
    <Stack spacing={3}>
      <Typography variant="h2" component="h2">
        Editar Vehículo{' '}
      </Typography>

      <Form
        inputs={fields}
        onSubmit={onSubmit}
        validationSchema={schema}
        errorsFromResponse={errorsFromResponse}
        submitLabel="Editar"
        defaultValues={defaultValues}
      />
    </Stack>
  )
}

export default EditVehiclePage
