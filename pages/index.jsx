import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'


const apiKey = ' AIzaSyBzNT3fX6MOFD3RRyeCJTLwJDJmU-c0Z_s'


export default function Home() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [adress, setAdress] = useState({})

  const getLatLongAndAress = async () => {


    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setAdress(axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.longitude},${position.coords.latitude}&key=${apiKey}`).catch((error) => console.log(error)))
      })
    } else {
      setLatitude('false')
      setLatitude('false')
    }


  }





  useEffect( () => {
    getLatLongAndAress()

    
  }, [])
  return (


    <>

      <div className={styles.container}>
        <h1>Longitude {longitude} Latitude {latitude}</h1>
        <input type="text" name="Nome" />
        <h1>Numero Celular</h1>
        <input type="text" name="telefone" />
        <h1>Endereço {console.log(adress)}</h1>
        <input type="text" name="endereco" />
        <h1>Numero da casa</h1>
        <input type="number" name="numero" />
        <h1>Destino</h1>
        <input type="text" name="destino" />
      </div>
    </>
  )

}