import React, { Component } from 'react'
export default function kFormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    handleChange = e => {
      let { name, value } = e.target
      this.setState({ [name]: value })
    }

    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return InputCmp =>
        React.cloneElement(InputCmp, {
          name: field,
          value: this.state[field] || "",
          onChange: this.handleChange
        })
    }

    getFieldValue = field => {
      return this.state[field]
    }

    getFieldsValue = () => {
      return { ...this.state }
    }

    validateFields = callback => {
      let errors = {};
      const state = { ...this.state };
      for (let field in this.options) {
        if (state[field] === undefined) {
          errors[field] = "error";
        }
        console.log("item", field); //sy-log
      }
      if (JSON.stringify(errors) === "{}") {
        // 没有错误信息
        callback(undefined, state);
      } else {
        // 有错误信息，返回
        callback(errors, state);
      }
    }

    render() {
      return (
        <div className="border">
          <Cmp
            {...this.props}
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}