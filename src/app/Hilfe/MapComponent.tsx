'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function MyMapComponent() {
    return (
        <LoadScript googleMapsApiKey='AIzaSyB9toUSiCs77ULtchI9hyDjnLN4Lr58s-Y'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(MyMapComponent);
