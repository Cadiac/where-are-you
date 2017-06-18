import React, { Component } from 'react';
import Layout, { Content } from 'antd/lib/layout';

import MapContainer from './MapContainer';
import Registration from './Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <Layout>
        <Content>
          <MapContainer />
          <Registration
            name={this.state.name}
            onChangeName={this.onChangeName}
          />
        </Content>
      </Layout>
    );
  }
}

export default App;
