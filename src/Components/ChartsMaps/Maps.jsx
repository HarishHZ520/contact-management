import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const fetchCountriesData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await response.json();
  return data;
};

const Maps = () => {
  const {
    data: countriesData,
    isLoading,
    isError,
  } = useQuery(['countriesData'], fetchCountriesData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const markerIcon = new Icon({
    iconUrl: '../../assets/icon/marker.png',
    iconSize: [24, 24],
  });

  return (
    <>
      <MapContainer center={[20, 77]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesData.map((country) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={markerIcon}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Maps;
