import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Form from 'antd/lib/form';

import './RegistrationForm.css';

const FormItem = Form.Item;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.changeName(values.username);
        this.props.nextStep();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>,
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Next
          </Button>
        </FormItem>
      </Form>
    );
  }
}


RegistrationForm.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default Form.create({})(RegistrationForm);

