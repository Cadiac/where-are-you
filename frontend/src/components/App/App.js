import React, { Component } from 'react';
import Layout, { Content } from 'antd/lib/layout';

import MapContainer from '../Map/MapContainer';
import MapOverlay from '../Map/MapOverlay';
import Registration from '../Registration/Registration';

import { registerUser, updateLocation, getPeopleLocations } from '../../utils/api';

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
      people: [],
      userId: null,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onLocationFound = this.onLocationFound.bind(this);
    this.onEndRegistration = this.onEndRegistration.bind(this);
  }

  componentDidMount() {
    getPeopleLocations()
      .then(response => response.data)
      .then((people) => {
        this.setState({
          people,
        });
      });
  }

  onLocationFound(e) {
    console.log("foobar");
    this.setState({
      hasLocation: true,
      location: e.latlng,
    });
  }

  onChangeName(name) {
    this.setState({ name });
    registerUser(name)
      .then(response => response.data)
      .then(userId => this.setState({ userId }));
  }

  onEndRegistration() {
    this.setState({
      hasRegistration: true,
    });
    updateLocation(this.state.userId, this.state.location);
  }

  render() {
    return (
      <Layout>
        <Content>
          <MapContainer
            handleLocationFound={this.onLocationFound}
            location={this.state.location}
            people={this.state.people}
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
