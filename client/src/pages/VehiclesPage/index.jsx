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
import { Table, VehicleCard } from 'src/components'
import { useVehicles } from 'hooks'
import vehicleService from 'src/services/vehicle-service'

function VehiclesPage() {
  const { vehicles, loading, errors, setVehicles } = useVehicles()
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleEdit = ({ _id: VehicleIdToEdit }) =>
    navigate('/vehicle/edit/' + VehicleIdToEdit)
  const handleDelete = ({ _id: VehicleIdToDelete }) =>
    vehicleService
      .delete(VehicleIdToDelete)
      .then(() =>
        setVehicles(
          vehicles.filter((vehicle) => vehicle._id !== VehicleIdToDelete)
        )
      )
      .catch((err) => {
        if (err.response.status === 400)
          setErrorsFromResponse(err.response.data)
      })

  if (loading) return <CircularProgress />

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Mis Vehículos
        </Typography>
        <Stack spacing={2} direction={'row'}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            component={Link}
            to="/vehicle/new"
          >
            Nuevo Vehículo
          </Button>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-start"
      >
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle._id}
            onEdit={handleEdit}
            onDelete={handleDelete}
            vehicle={vehicle}
          />
        ))}
      </Stack>
    </Stack>
  )
}
export default VehiclesPage
