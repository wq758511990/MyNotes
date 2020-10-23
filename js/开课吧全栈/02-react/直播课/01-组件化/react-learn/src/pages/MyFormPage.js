import React, { Component } from 'react'
import kFormCreate from '../components/kFormCreate'

@kFormCreate
class MyFormPage extends Component {
    submit = () => {
        console.log("submit")
    }
    render() {
        return (
            <div>
                <h3>MyFormPage</h3>
                <input type="text" placeholder="please input your name" />
                <p></p>
                <input type="text" placeholder="please input your pwd" />
                <p></p>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}

export default MyFormPage