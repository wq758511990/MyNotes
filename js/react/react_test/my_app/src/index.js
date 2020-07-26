import React from "react"
import ReactDom from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>hello, react</div>
        )
    }
}

// React.PureComponent
// React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 
// 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。


// React.isValidElement(object)
// 验证对象是否为 React 元素，返回值为 true 或 false。


// React.Children
// React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法。


/**
 * React.Component
 */

// 在 React.Component 的子类中有个必须定义的 render() 函数


// 挂载
// 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()


// 更新
// 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。


// 通常，在 React 中，构造函数仅用于以下两种情况：
// 通过给 this.state 赋值对象来初始化内部 state。
// 为事件处理函数绑定实例


// componentDidCatch(error, info)
// 此生命周期在后代组件抛出错误后被调用。 它接收两个参数：

// error —— 抛出的错误。
// info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。

// setState() 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。
// 这是用于更新用户界面以响应事件处理器和处理服务器数据的主要方式

ReactDom.render(
    <App />,
    document.getElementById('root')
)