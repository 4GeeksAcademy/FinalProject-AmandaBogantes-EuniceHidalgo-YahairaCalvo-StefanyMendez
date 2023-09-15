import React from 'react';
import '../../styles/mapLocation.css'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapLocation = ({ google }) => {
  const location = { lat: 9.890119694229538, lng: -84.033954198145 };

  return (

    <div className="row mapBigContainer">
      <div className='col-lg-5 col-md-12 addressContainer p-5'>
        <div className='row d-flex align-items-center justify-content-center'>
          <i className="col-2 fa-solid fa-location-dot ubication fs-2"></i>
          <p className="col address d-flex flex-column align-items-center justify-content-center fs-5">300 metros este y 100 metros norte del Palí de Fátima</p>
        </div>
        <div className='row d-flex align-items-center justify-content-center'>
          <i className="col-2 fa-duotone fa-mailbox-flag-up fs-2"></i>
          <p className="col zipCode d-flex flex-column align-items-center justify-content-center fs-5">Zip Code: 10109, Pavas, Desamparados, San José</p>
        </div>
      </div>
      <div className='col-lg-6 col-md-12 map-container d-flex align-items-center justify-content-center'>
        <div className='map'>
          <Map
            google={google}
            zoom={16}
            initialCenter={location}>
            <Marker position={location} />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBhCY-RK8TztuuPm-fcdxuUmEdDLw1tgfw',
})(MapLocation);
