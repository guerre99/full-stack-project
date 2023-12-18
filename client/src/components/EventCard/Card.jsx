import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

function CardCustomer({ name, latitude, longitude }) {
  return (
    <Card sx={{ width: '100%', m: '2%' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <div>
            <Typography gutterBottom variant="h5" component="div">
              SEVILLA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2024-01-01
            </Typography>
          </div>

          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="success">
              <EditIcon />
            </Button>
            <Button variant="contained" color="error">
              <DeleteIcon />
            </Button>
            <Button variant="contained" color="terciary">
              Ver más...
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CardCustomer
