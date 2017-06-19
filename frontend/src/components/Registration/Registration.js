import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import Card from 'antd/lib/card';

import Steps, { Step } from 'antd/lib/steps';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './Registration.css';

import RegistrationForm from './RegistrationForm';

const RegistrationContent = (props) => {
  switch (props.step) {
    case 0:
      return (
        <div>
          <Button type="primary" size="large" onClick={props.onNext}>
            Next
          </Button>
        </div>
      );
    case 1:
      return (
        <div>
          <RegistrationForm nextStep={props.onNext} changeName={props.onChangeName} />
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Welcome, {props.name}</h1>
        </div>
      );
    default:
      return null;
  }
};

RegistrationContent.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
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
      <Card className="registration-row">
        <Row type="flex" justify="center" className="registration-steps">
          <Col span={12}>
            <h1>Missä?</h1>
          </Col>
        </Row>
        <Row type="flex" justify="center" className="registration-steps">
          <Col span={6}>
            <Steps direction="vertical" current={this.state.step}>
              <Step title="Location" description="Allow location." />
              <Step title="Username" description="Choose username." />
              <Step title="Finished" description="All ready." />
            </Steps>
          </Col>
          <Col span={6}>
            <RegistrationContent
              step={this.state.step}
              name={this.props.name}
              onChangeName={this.props.handleChangeName}
              onNext={this.nextStep}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

Registration.propTypes = {
  name: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  hasLocation: PropTypes.bool.isRequired,
};

export default Registration;
