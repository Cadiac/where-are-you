import React, { Component } from 'react';
import Layout, { Content } from 'antd/lib/layout';

import MapContainer from '../Map/MapContainer';
import MapOverlay from '../Map/MapOverlay';
import Registration from '../Registration/Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hasLocation: false,
      location: {
        lat: 0,
        lng: 0,
      },
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onLocationFound = this.onLocationFound.bind(this);
  }

  onLocationFound(e) {
    this.setState({
      hasLocation: true,
      location: e.latlng,
    });
  }

  onChangeName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <Layout>
        <Content>
          <MapContainer
            handleLocationFound={this.onLocationFound}
            location={this.state.location}
          />
          <MapOverlay />
          <Registration
            name={this.state.name}
            handleChangeName={this.onChangeName}
            hasLocation={this.state.hasLocation}
          />
        </Content>
      </Layout>
    );
  }
}

export default App;
