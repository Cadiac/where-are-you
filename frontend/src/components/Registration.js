import React from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './Registration.css';

const Registration = props => (
  <div>
    <Row type="flex" justify="center" align="middle" className="registration-row">
      <Col className="registration-input">
        <Input
          size="large"
          placeholder="Who are you?"
          prefix={<Icon type="user" />}
          value={props.name}
          onChange={props.onChangeName}
        />
      </Col>
      <Col>
        <Button type="primary" size="large">
          Save
        </Button>
      </Col>
    </Row>
  </div>
);

Registration.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default Registration;
