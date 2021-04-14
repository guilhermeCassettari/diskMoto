import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'


const apiKey = ' AIzaSyBzNT3fX6MOFD3RRyeCJTLwJDJmU-c0Z_s'


export default function Home() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHousenumber] = useState('')
  const [adress, setAdress] = useState()

  //navigator.geolocation.watchPosition(geo_success, geo_error, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});

  const geoSuccess = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  const geoError = () => {
    console.log(error)
  }


  //  navigator.geolocation.watchPosition(function (position) { 
  const getLatLong = async () => {
    if (latitude == '' && longitude == '') {
      if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(geoSuccess, geoError, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});        
      }
    } else {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`).then(res => {
        setAdress(res)
        setStreet(res.data.results[0].address_components[1].short_name)
        setHousenumber(res.data.results[0].address_components[0].short_name)
        setCity(res.data.results[0].address_components[6].short_name)
        console.log(res.data.results[0].address_components[6].short_name)
    }).catch((error) => console.log(error))
      
    }
  }
  useEffect(() => {
    getLatLong()

  }, [ longitude])
  return (

    
    <>
    

      <div className={styles.container}>
        <h1>Nome</h1>
        <input type="text" name="Nome" />
        <h1>Telefone</h1>
        <input type="text" name="telefone" autoComplete="true"/>
        <h1>Rua </h1>
        <input type="text" name="endereco" placeholder={ street } />
        <h1>Numero da casa</h1>
        <input type="tel" name="numero" placeholder={ houseNumber }/>
        <h1>Destino</h1>
        <input type="text" name="destino" />
        <h1></h1>
        <button>Calcular Corrida</button>
      </div>
    </>
  )

}