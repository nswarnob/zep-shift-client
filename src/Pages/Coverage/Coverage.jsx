import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router'


const Coverage = () => {
    const serviceCenter = useLoaderData();
    const bdCenter = [23.6850, 90.3563];

    return (
        <div className='mt-10 space-y-8' >
            <h2 className='text-5xl text-center font-bold'>We are available in 64 districts.</h2>
            <div>

            </div>
            <div className='h-[700px] w-full'>
                <MapContainer className='h-[800px]' center={bdCenter} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

              {
                serviceCenter.map((center, index)=> <Marker key={index} position={[center.latitude, center.longitude ]} >
                        <Popup>    <strong>{center.district} </strong> </Popup>
                    </Marker>)
              }

                </MapContainer>


            </div>
        </div>
    )
}

export default Coverage