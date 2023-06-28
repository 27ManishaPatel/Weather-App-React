import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
    });
    console.log('latitude is:' ,lat)
    console.log('longitude is:' ,long)
  }, [lat, long]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
