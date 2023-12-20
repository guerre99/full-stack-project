import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Dialog } from 'components'
import { useState } from 'react'

function VehicleCard({ vehicle, onEdit, onDelete, onDetail }) {
  const { model } = vehicle

  const [rowForDelete, setRowForDelete] = useState({})
  const [open, setOpen] = useState(false)

  const handleConfirm = (row) => {
    setRowForDelete(row), setOpen(true)
  }

  const handleClose = () => {
    setRowForDelete({}), setOpen(false)
  }

  const handleDelete = () => {
    onDelete(rowForDelete), handleClose()
  }

  const handleEdit = (row) => {
    onEdit(row)
  }
  return (
    <>
      <Card sx={{ width: '100%', m: '2%' }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" component="div">
              {model}
            </Typography>

            <Stack direction="row" spacing={1}>
              {onEdit && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleEdit(vehicle)}
                >
                  <EditIcon />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleConfirm(vehicle)}
                >
                  <DeleteIcon />
                </Button>
              )}
              {onDetail && (
                <Button variant="contained" color="terciary">
                  Detalles
                </Button>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        onDelete={handleDelete}
        confirmText="¿Seguro que quieres eliminar el vehicleo?"
      />
    </>
  )
}

export default VehicleCard
