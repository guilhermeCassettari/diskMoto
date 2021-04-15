import React, { useEffect, useState, useCallback, memo } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

import Map from '../components/map/Map'



const apiKey = "AIzaSyBzNT3fX6MOFD3RRyeCJTLwJDJmU-c0Z_s"



const Home = () => {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [city, setCity] = useState(null)
  const [street, setStreet] = useState(null)
  const [houseNumber, setHousenumber] = useState(null)
  const [adress, setAdress] = useState()



  const geoSuccess = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
  }

  const geoError = () => {
    console.log()
  }


  const getLatLong = async () => {
    if (latitude == null && longitude == null) {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(geoSuccess, geoError, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
      }
    } else {
      // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`).then(res => {
      //   setAdress(res)
      //   setStreet(res.data.results[0].address_components[1].short_name)
      //   setHousenumber(res.data.results[0].address_components[0].short_name)
      //   setCity(res.data.results[0].address_components[3].short_name)
      //   console.log(res.data.results[0].address_components[0].short_name)
      //
      // }).catch((error) => console.log(error))

    }
  }


  useEffect(() => {
    getLatLong()

  }, [longitude])




  return longitude != null ? (
    <>
    
    <Map 
    apiKey={apiKey}
    lat={latitude}
    lng={longitude}
    
    />
    </>
  ) : <><h1>Nops</h1></>
}

export default Home


