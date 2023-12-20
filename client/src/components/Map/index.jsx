import React from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

const containerStyle = {
  width: '500px',
  height: '500px',
}

const center = {
  lat: 40.41663561059165,
  lng: -3.7038106307662755,
}

const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey,
  })

  const [map, setMap] = React.useState(null)
  const [selectedMarker, setSelectedMarker] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker)
  }

  const onCloseInfoWindow = () => {
    setSelectedMarker(null)
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Agregar marcador con InfoWindow */}
      <Marker
        position={{ lat: 40.41663561059165, lng: -3.7038106307662755 }}
        onClick={() => onMarkerClick('Nombre de la ubicación')}
      />

      {/* Mostrar InfoWindow cuando se selecciona un marcador */}
      {selectedMarker && (
        <InfoWindow
          position={{ lat: 40.41663561059165, lng: -3.7038106307662755 }}
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
