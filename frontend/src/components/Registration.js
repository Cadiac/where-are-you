import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Steps, { Step } from 'antd/lib/steps';

import './Registration.css';

const RegistrationContent = (props) => {
  switch (props.step) {
    case 0:
      return (
        <Row type="flex" justify="center" align="middle" className="steps-content">
          <Col>
            <Button type="primary" size="large" onClick={props.onNext}>
              Next
            </Button>
          </Col>
        </Row>
      );
    case 1:
      return (
        <Row type="flex" justify="center" align="middle" className="steps-content">
          <Col className="registration-input">
            <Input
              size="large"
              placeholder="Username"
              prefix={<Icon type="user" />}
              value={props.name}
              onChange={props.onChangeName}
            />
          </Col>
          <Col>
            <Button type="primary" size="large" onClick={props.onNext}>
              Next
            </Button>
          </Col>
        </Row>
      );
    case 2:
      return null;
    default:
      return null;
  }
};

RegistrationContent.propTypes = {
  step: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  render() {
    return (
      <div className="registration-row">
        <Row type="flex" justify="center" className="registration-steps">
          <Col span={12}>
            <Steps current={this.state.step}>
              <Step title="Location" description="Allow location." />
              <Step title="Username" description="Choose username." />
              <Step title="Finished" description="All ready." />
            </Steps>
          </Col>
        </Row>
        <RegistrationContent
          step={this.state.step}
          name={this.props.name}
          onChangeName={this.props.onChangeName}
          onNext={this.nextStep}
        />
      </div>
    );
  }
}

Registration.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default Registration;
