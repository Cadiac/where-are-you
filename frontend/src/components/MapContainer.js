import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './MapContainer.css';

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 0,
        lng: 0,
      },
    };
  }

  componentDidMount() {
    this.updateLocation();
  }

  updateLocation() {
    this.map.leafletElement.locate({ setView: true, maxZoom: 15 });
  }

  handleLocationFound(e) {
    this.setState({
      hasLocation: true,
      location: e.latlng,
    });
  }

  render() {
    return (
      <Map
        className="map-container"
        center={this.state.location}
        onLocationfound={this.handleLocationFound}
        ref={(map) => { this.map = map; }}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FkaWFjIiwiYSI6ImNqM3JkNWZxbzAwNXIyd214aTFsdWZocGwifQ._Ar_1ePckcti9A_GIZHP6Q"
        />
        <Marker position={this.state.location}>
          <Popup>
            You are here
          </Popup>
        </Marker>
      </Map>
    );
  }
}
