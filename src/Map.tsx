import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import React, {useState, useEffect, SetStateAction} from "react";

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click(e) {
            map.locate()
        },
        locationfound(e) {
            //setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
function Map() {


    return (
        <MapContainer
            center={{lat: 58.94306, lng: 23.54139}}
            zoom={10}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>
    )
}

export default Map;