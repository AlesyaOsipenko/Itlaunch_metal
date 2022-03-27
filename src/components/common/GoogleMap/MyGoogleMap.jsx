import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import s from './MyGoogleMap.module.css'

const center = {
  lat: 59.91134010347736,
  lng: 30.26440323559413
};

const MyGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC-9VVQiEHuh2BJNypBPy5eSiIj0vW5sDg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return <div className={s.map}>
    {isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
    ) : <></>}
  </div>
}

export default React.memo(MyGoogleMap)