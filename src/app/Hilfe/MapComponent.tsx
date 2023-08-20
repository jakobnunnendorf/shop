'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};
//50.93501072216146, 6.855269005314785
const center = {
    lat: 50.93501072216146,
    lng: 6.855269005314785,
};

function MyMapComponent() {
    return (
        <div className='w-full h-96'>
            <LoadScript googleMapsApiKey='AIzaSyB9toUSiCs77ULtchI9hyDjnLN4Lr58s-Y'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default React.memo(MyMapComponent);
