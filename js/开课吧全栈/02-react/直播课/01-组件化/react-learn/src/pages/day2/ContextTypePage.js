import React, { Component } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default class ContextTypePage extends Component {
    static contextType = ThemeContext

    render() {
        console.log('this', this)
        return (
            <div>
                <h3>context type page</h3>
            </div>
        )
    }
}
