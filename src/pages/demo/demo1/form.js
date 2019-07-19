import React, { PureComponent } from 'react';
import { Form, Input, Select, Button } from 'antd';
const { Option } = Select;

@Form.create()
class NormalLoginForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getName(values)
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value) {
      callback();
      return;
    }
    callback('请输入姓名');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [{ validator: this.checkPrice }]
          })( <Input
            type="text"
            style={{ width: '100%', marginRight: '3%' }}
          />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default NormalLoginForm