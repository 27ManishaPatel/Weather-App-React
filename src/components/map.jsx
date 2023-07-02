import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ location, zoomLevel }) => {
  console.log(location)
  return (
<div className="map">
    <h2>{location.lat}</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "REACT_APP_MAP_API_KEY" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
      </GoogleMapReact>
    </div>
  </div>
  )
}


export default Map;