import React, { Component } from 'react'
import kFormCreate from '../components/kFormCreate'

const namerules = {required: true, message: "please input ur name"};
const passwordRules = {required: true, message: "please input ur password"};

@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const { validateFields, getFieldsValue } = this.props
    console.log(getFieldsValue())
    validateFields((err, values) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("success", values); //sylog
      }
    })
  }
  render() {
    console.log('props', this.props)
    const { getFieldDecorator } = this.props
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator("name", { rules: [namerules] })(
          <input type="text" placeholder="enter ur name" />
        )}
        {getFieldDecorator("password", { rules: [passwordRules] })(
          <input type="text" placeholder="enter ur pwd" />
        )}
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}

export default MyFormPage