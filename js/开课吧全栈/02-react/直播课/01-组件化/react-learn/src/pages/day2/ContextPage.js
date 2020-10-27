import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import { ThemeProvider } from '../../ThemeContext'
import ConsumerPage from './ConsumerPage'

// 使用context
// 1、创建context
// 2、创建provider
// 3、provider接收value
// 4、接收（1、consumer 2、class.conntextType)


export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                themeColor: "red"
            }
        }
    }
    render() {
        const { theme } = this.state
        return (
            <div>
                <h3>context page</h3>
                <ThemeProvider value={theme}>
                    <ContextTypePage />
                    <ConsumerPage />
                </ThemeProvider>
            </div>
        )
    }
}
