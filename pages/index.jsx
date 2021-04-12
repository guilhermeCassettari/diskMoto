import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'



export default function Home() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
      
    } else {
      setLatitude('false')
      setLatitude('false')
    }
    
  }, [])

  return (

    <div className={styles.container}>
      <h1>{longitude}</h1>
      <input type="text" name="Nome" />
      <h1>Numero Celular</h1>
      <input type="text" name="telefone" />
      <h1>Endereço</h1>
      <input type="text" name="endereco" />
      <h1>Numero da casa</h1>
      <input type="number" name="numero" />
      <h1>Destino</h1>
      <input type="text" name="destino" />
    </div>
  )
}
