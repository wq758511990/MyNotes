import React, { Component } from 'react'
// HOC：是个函数，接收组件，返回组件
function Child(props) {
    return <div>Child</div>
}

//Cmp 是 function 或者 class 组件
const foo = Cmp => props => {
    return <div className="border">
        <Cmp {...props} />
    </div>
}

const Foo = foo(foo(Child))

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>Hoc Page</h3>
                <Foo />
            </div>
        )
    }
}
