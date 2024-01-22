import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from '../Asessts/Image/22.jpeg';
import img2 from '../Asessts/Image/33.jpg';
import img3 from '../Asessts/Image/33.webp';
import img4 from '../Asessts/Image/4.jpg';
const MapComponent = () => {
  const mapTilerApiKey = 'wCnjHnVHpC3NJoaSGgb5';

  const locations = [
    { position: [51.505, -0.09], images: [img, img2], text: 'Text for location 1', text2: '$32' },
    { position: [51.505, -0.10], images: [img2, img3], text: 'Text for location 2', text2: '$35' },
    { position: [51.505, -0.12], images: [img3, img4], text: 'Text for location 3', text2: '$36' },
    { position: [51.505, -0.14], images: [img4, img2], text: 'Text for location 5', text2: '$39' },
    // Add more locations as needed
  ];
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: 0,
    borderRadius: '50%',
    outline: 0,
    background: 'white',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    textShadow: '1px 1px rgba(0, 0, 0, 0.1)',
  };


  const markers = locations.map((location) => {
    const text = L.divIcon({
      html: location.text2,
      className: 'text-icon',
    });

    return (
      <Marker key={location.position.toString()} position={location.position} icon={text}>
        <Popup>
          <Carousel showThumbs={false} renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Stop propagation to prevent closing the popup
                  onClickHandler(e);
                }}
                title={label}
                style={{ ...arrowStyles, left: 0, display: "flex", justifyContent: 'center', alignContent: 'center' }}
              >
                <ChevronLeft style={{ fontSize: '1em', color: 'black' }} />
              </button>
            )
          } renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Stop propagation to prevent closing the popup
                  onClickHandler(e);
                }}
                title={label}
                style={{ ...arrowStyles, right: 0, display: "flex", justifyContent: 'center', alignContent: 'center' }}
              >
                <ChevronRight style={{ fontSize: '1em', color: 'black' }} />
              </button>
            )
          }>
            {location.images.map((image, imageIndex) => (
              <div key={imageIndex}>
                <img style={{ width: '100%' }} src={image} alt={`Image ${imageIndex + 1}`} />
              </div>
            ))}
          </Carousel>
          <div>
            <h3>{location.text}</h3>
            <p>Additional information goes here...</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer center={locations[0].position} zoom={16} style={{ height: '500px', width: '80%' }}>
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerApiKey}`}
        attribution='© MapTiler, OpenStreetMap contributors'
      />
      {markers}
    </MapContainer>
  );
};

export default MapComponent;
