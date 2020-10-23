import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
export default class FormPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        } 
    }
    submit = () => {
        console.log('submit')
    }
    render() {
        const { name, password } = this.state 
        return (
            <div>
                <h3>Form Page2</h3>
                <Form>
                    <Form.Item>
                        <Input placeholder="please input your name" value={name} onChange={e => this.setState({name: e.target.value})}/>
                    </Form.Item>
                    <Form.Item>
                        <Input type="password" placeholder="please input your pwd" value={password} onChange={e => this.setState({password: e.target.value})} />
                    </Form.Item>
                    <Button type="primary" onClick={this.submit}>提交</Button>
                </Form>
            </div>
        )
    }
}
