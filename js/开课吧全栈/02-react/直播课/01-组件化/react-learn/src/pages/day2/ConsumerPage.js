import React from 'react'
import { ThemeConsumer } from '../../ThemeContext'

export default function ConsumerPage() {
    return (
        <div className="border">
            <h3>consumer page</h3>
            <ThemeConsumer>{
                ctx => <div className={ctx.themeColor}>文本</div>
            }</ThemeConsumer>
        </div>
    )
}
