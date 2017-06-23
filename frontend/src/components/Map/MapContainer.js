import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import moment from 'moment';

import config from '../../utils/config';

import './MapContainer.css';

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    this.updateLocation();
  }

  updateLocation() {
    this.map.leafletElement.locate({ setView: true, maxZoom: 16 });
  }

  render() {
    return (
      <Map
        className="map-container"
        center={this.props.location}
        onLocationfound={this.props.handleLocationFound}
        ref={(map) => { this.map = map; }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=${config.mapboxToken}`}
          attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={this.props.location}>
          <Popup>
            <span>You are here</span>
          </Popup>
        </Marker>
        {this.props.people.map(person => (
          <Marker key={person._id} position={person.location}>
            <Popup>
              <div>
                <h3>{person.name}</h3>
                <span>Last seen: {moment(person.updatedAt).fromNow()}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </Map>
    );
  }
}

MapContainer.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  handleLocationFound: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};
