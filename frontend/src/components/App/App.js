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
      hasRegistration: false,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onLocationFound = this.onLocationFound.bind(this);
    this.onEndRegistration = this.onEndRegistration.bind(this);
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

  onEndRegistration() {
    this.setState({
      hasRegistration: true,
    });
  }

  render() {
    return (
      <Layout>
        <Content>
          <MapContainer
            handleLocationFound={this.onLocationFound}
            location={this.state.location}
          />
          {!this.state.hasRegistration && [
            <MapOverlay key="overlay" />,
            <Registration
              key="registration"
              name={this.state.name}
              hasLocation={this.state.hasLocation}
              handleChangeName={this.onChangeName}
              handleEndRegistration={this.onEndRegistration}
            />,
          ]}
        </Content>
      </Layout>
    );
  }
}

export default App;
