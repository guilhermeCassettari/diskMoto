import React, { useState, useCallback,useEffect, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Maps = (props) => {

    const { apiKey, lat, lng } = props
    useEffect(() => {
        console.log('dentro do maps',lat, lng)
    }, [])
    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    let center = {
        lat: lat,
        lng: lng
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    })

    // const [map, setMap] = useState(null)

    // const onLoad = useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    // const onUnmount = useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
           
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}


export default memo(Maps)


