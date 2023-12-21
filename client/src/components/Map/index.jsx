import React, { useState, useEffect } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '500px',
}

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY

function Map({ event }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey,
  })

  const [location, setLocation] = useState(null)
  const [map, setMap] = useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null)

  useEffect(() => {
    // Preparar la dirección para geocodificación
    const address = event.ubication

    // Construir la URL de la API de Geocodificación
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${googleApiKey}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const cityResult = data.results.find((result) => {
            const cityComponent = result.address_components.find((component) =>
              component.types.includes('locality')
            )
            return (
              cityComponent &&
              cityComponent.long_name.toLowerCase() === event.city.toLowerCase()
            )
          })

          if (cityResult) {
            const location = cityResult.geometry.location
            setLocation(location)
          } else {
            console.error(
              'No se encontró la ciudad en los resultados de geocodificación'
            )
          }
        } else {
          console.error('Error en la geocodificación:', data.status)
        }
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud:', error)
      })
  }, [event.ubication, event.city])

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  const onMarkerClick = () => {
    setSelectedMarker('Nombre de la ubicación')
  }

  const onCloseInfoWindow = () => {
    setSelectedMarker(null)
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location || undefined} // Usar location si está disponible, de lo contrario, dejarlo sin definir
      zoom={location ? 15 : 5} // Ajustar el nivel de zoom en función de si hay una ubicación disponible
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Agregar marcador con InfoWindow */}
      {location && (
        <Marker
          position={{ lat: location.lat, lng: location.lng }}
          onClick={onMarkerClick}
        />
      )}

      {/* Mostrar InfoWindow cuando se selecciona un marcador */}
      {selectedMarker && location && (
        <InfoWindow
          position={{ lat: location.lat, lng: location.lng }}
          onCloseClick={onCloseInfoWindow}
        >
          <div>
            <h3>{selectedMarker}</h3>
          </div>
        </InfoWindow>
      )}

      {/* Otros componentes secundarios, como ventanas de información, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default Map
