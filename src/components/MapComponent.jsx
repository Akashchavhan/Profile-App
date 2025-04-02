// src/components/MapComponent.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ address }) => {
  const [position, setPosition] = useState([37.7749, -122.4194]); // Default to San Francisco

  useEffect(() => {
    if (address) {
      // For demo purposes, we'll just convert addresses to lat/lng (this would normally be done via a geocoding API like Google Maps API)
      const geoCoding = {
        '1600 Amphitheatre Parkway, Mountain View, CA': [37.423021, -122.083739],
        '1 Infinite Loop, Cupertino, CA': [37.33182, -122.03118],
      };
      setPosition(geoCoding[address] || position);
    }
  }, [address]);

  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
