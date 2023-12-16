import { Height } from '@mui/icons-material'
import { Card, CardContent, Typography, Stack } from '@mui/material'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function CardCustomer({ name, latitude, longitude }) {
  let latitud = Number(latitude)
  let longitud = Number(longitude)

  return (
    <Card sx={{ width: '45%', m: '2%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Stack sx={{ height: '100%' }}>
          <MapContainer
            style={{ height: 450, width: '97.5%' }}
            center={[latitud, longitud]}
            xº
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitud, longitud]}>
              <Popup>{name}</Popup>
            </Marker>
          </MapContainer>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CardCustomer
