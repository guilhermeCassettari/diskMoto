import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'


const apiKey = ' AIzaSyBzNT3fX6MOFD3RRyeCJTLwJDJmU-c0Z_s'


export default function Home() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [adress, setAdress] = useState()

  const getLatLong = async () => {
    if (latitude == '' && longitude == '') {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        })
      }
    } else {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`).then(res => {
        setAdress(res)
        console.log(res.data.results[0].formatted_address)
    }).catch((error) => console.log(error))
      
    }
  }
  useEffect(() => {
    getLatLong()

  }, [ longitude])
  const clickou = () => console.log(adress)
  return (

    
    <>
    

      <div className={styles.container}>
        <h1>Longitude {longitude} Latitude {latitude}</h1>
        <input type="text" name="Nome" />
        <h1></h1>
        <input type="text" name="telefone" />
        <h1>{ adress ?  adress.data.results[0].formatted_address: 'nops'} </h1>
        <input type="text" name="endereco" />
        <h1>Numero da casa</h1>
        <input type="tel" name="numero" />
        <h1>Destino</h1>
        <input type="text" name="destino" onClick={clickou}/>
      </div>
    </>
  )

}