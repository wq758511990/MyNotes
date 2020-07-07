import React from 'react'

class OtherComponent extends React.Component {
    // 用React.lazy导入的组件需要export default导出
    render() {
        return (
            <div>
                this is a component from othercomponent
            </div>
        )
    }
}

// 一个js文件中只允许一个export default
class AnotherComponent extends React.Component {
    render() {
        return (
            <div>
                this is anotherComponent from othercomponent
            </div>
        )
    }
}

// 可以包在对象里
const mycoms = {
    OtherComponent,
    AnotherComponent
}

export default mycoms