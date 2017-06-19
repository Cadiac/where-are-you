import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';
import Button from 'antd/lib/button';

import Steps, { Step } from 'antd/lib/steps';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './Registration.css';

import RegistrationForm from './RegistrationForm';

const RegistrationContent = (props) => {
  switch (props.step) {
    case 0:
      return (
        <div className="registration-container">
          <h3>Finding your location...</h3>
          <Spin spinning={!props.hasLocation} />
        </div>
      );
    case 1:
      return (
        <div className="registration-container">
          <RegistrationForm nextStep={props.nextStep} changeName={props.changeName} />
        </div>
      );
    case 2:
      return (
        <div className="registration-container">
          <h2>Welcome, {props.name}</h2>
          <Button type="primary" size="large" onClick={props.endRegistration}>
            Begin
          </Button>
        </div>
      );
    default:
      return null;
  }
};

RegistrationContent.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hasLocation: PropTypes.bool.isRequired,
  nextStep: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  endRegistration: PropTypes.func.isRequired,
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };

    this.nextStep = this.nextStep.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // If at first step and location hasn't been found yet
    if (this.state.step === 0 && nextProps.hasLocation && !this.props.hasLocation) {
      this.nextStep();
    }
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  render() {
    return (

      <Row type="flex" justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card title="Missä?" className="registration-card">
            <Row type="flex" justify="space-around">
              <Col xs={24} sm={6} md={6} lg={6} className="registration-column">
                <Steps direction="vertical" current={this.state.step} className="registration-steps">
                  <Step title="Location" description="Allow location." />
                  <Step title="Username" description="Choose username." />
                  <Step title="Finished" description="All ready." />
                </Steps>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} className="registration-column">
                <RegistrationContent
                  step={this.state.step}
                  name={this.props.name}
                  nextStep={this.nextStep}
                  changeName={this.props.handleChangeName}
                  endRegistration={this.props.handleEndRegistration}
                  hasLocation={this.props.hasLocation}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

Registration.propTypes = {
  name: PropTypes.string.isRequired,
  hasLocation: PropTypes.bool.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleEndRegistration: PropTypes.func.isRequired,
};

export default Registration;
