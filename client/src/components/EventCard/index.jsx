import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Dialog } from 'components'
import { useState } from 'react'

function EventCard({ event, onEdit, onDelete, onDetail }) {
  const { city, date } = event
  let fecha = new Date(date)
  let dia = fecha.getDate()
  let mes = fecha.getMonth()
  let año = fecha.getFullYear()

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

  const handleDetail = (row) => {
    onDetail(row)
  }
  return (
    <>
      <Card sx={{ width: '100%', m: '2%' }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography gutterBottom variant="h5" component="div">
                {city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${dia} - ${mes + 1} - ${año}`}
              </Typography>
            </div>

            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleEdit(event)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleConfirm(event)}
              >
                <DeleteIcon />
              </Button>
              <Button
                variant="contained"
                color="terciary"
                onClick={() => handleDetail(event)}
              >
                Ver más...
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        onDelete={handleDelete}
        confirmText="¿Seguro que quieres eliminar el evento?"
      />
    </>
  )
}

export default EventCard
