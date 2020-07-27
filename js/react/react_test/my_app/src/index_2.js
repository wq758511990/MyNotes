import React from "react"
import ReactDom from 'react-dom'
import './index_1.css'

// React中数据是向下流动的

// function tick() {
//     const element =
//         <div>
//             <div>Hello！</div>
//             <div>It's {new Date().toLocaleTimeString()} Now</div>
//         </div>
//     ReactDom.render(
//         element,
//         document.getElementById('root')
//     )
// }

// ReactDom.render(
//     element,
//     document.getElementById('root')
// )

// setInterval(() => {
//     tick()
// }, 1000);

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>
//     }
// }
// // 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Sam" />
//             <Welcome name="Tom" />
//         </div>
//     )
// }

// function Clock(props) {
//     return (
//         <div>
//             <h1>hello, world</h1>
//             <h2>It's {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount() {
        // 挂在的时候
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        // 卸载的时候
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                <h1>hello, world</h1>
                <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    tick() {
        // 1、不要直接修改 State
        // 2、State 的更新可能是异步的
        // 3、State 的更新会被合并


        // Wrong
        // this.setState({
        //     counter: this.state.counter + this.props.increment,
        // });
        // 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状

        // 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

        // Correct

        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment
        // }));
        // this.setState(function(state, props) {
        //     return {
        //         counter: state.counter + props.increment
        //     }
        // })



        this.setState({
            date: new Date()
        })
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(row, e) {
        console.log('e', e)
        console.log('row', row)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    render() {
        return (
            // 如果用箭头函数就不需要bind(this)
            <button onClick={(e) => this.handleClick(1, e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button = isLoggedIn ? <LogoutButton onClick={() => { this.handleLogoutClick() }} /> : <LoginButton onClick={() => this.handleLoginClick()} />
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

function MailBox(props) {
    const underMessage = props.underMessage
    return (
        <div>
            <h1>Hello!</h1>
            {
                // && 的特性 true && x 会返回x    false && x 会返回false
                underMessage.length > 0 &&
                <h2>You have {underMessage.length} unread messages</h2>
            }
        </div>
    )
}

function WarningBanner(props) {
    if (!props.warn) {
        return null
    }
    return (
        <div className="warning">
            warning
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showWarning: true
        }
    }

    handleToggleClick() {
        this.setState({
            showWarning: !this.state.showWarning
        })
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={() => { this.handleToggleClick() }}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

const messages = [1, 2, 3]

function ListItem(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number, index) => <li key={number.toString()}>{number}</li>) // 不得已的情况下用index来做key， 。。
    // 如果没有指定key React默认会用index作为key
    return (
        <ul>{listItems}</ul>
    )
}

// 用 key 提取组件
// 元素的 key 只有放在就近的数组上下文中才有意义。

// 比方说，如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。


// key 只是在兄弟节点之间必须唯一
// 数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：

function Blog(props) {
    const sidebar = (
        <div>
            <ul>
                {
                    props.posts.map((post) => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

    const content = props.posts.map((post) => {
        return (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    })

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    { id: 1, title: '1', content: '111' },
    { id: 2, title: '2', content: '222' }
]

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        alert('提交的名字：' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'this is a text about xxx'
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        alert('内容是：' + this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    文章：
                <textarea value={this.state.value} onChange={(e) => this.handleChange(e)}></textarea>
                    <input type="submit" value="提交"></input>
                </label>
            </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    选择你喜欢的风味:
            <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

// key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
            {/* 这里预留一个props.children ，后续将父组件中的嵌套组件放至这里  该例子中就是 
            <h1>
                Welcome
            </h1>
            <p>
                Thank you for coming
            </p>
            */}
        </div>
    )
}

function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            <h1>
                Welcome
            </h1>
            <p>
                Thank you for coming
            </p>
        </FancyBorder>
    )
}

// 少数情况下，你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 children，而是自行约定：将所需内容传入 props，并使用相应的 prop。

function SplitPane(props) {
    return (
        <div className="splitPane">
            <div className="split-left">
                {props.left}
            </div>
            <div className="split-right">
                {props.right}
            </div>
        </div>
    )
}

function App() {
    return (
        <SplitPane
            left={
                <p>this is left</p>
            }
            right={
                <p>this is right</p>
            } />
    )
}

{/* <Contacts /> 和 <Chat /> 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props， */ }
// 像其他数据一样传递。这种方法可能使你想起别的库中“槽”（slot）的概念，但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。

//有些时候，我们会把一些组件看作是其他组件的特殊实例，比如 WelcomeDialog 可以说是 Dialog 的特殊实例。

// 在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog_1() {
    // 这里WelcomeDialog_1 就是 Dialog的一个特殊组件，通过特殊化Dialog的指定条件
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

// 确定 UI state 的最小（且完整）表示
// 想要使你的 UI 具备交互功能，需要有触发基础数据模型改变的能力。React 通过实现 state 来完成这个任务。

// 为了正确地构建应用，你首先需要找出应用所需的 state 的最小表示，并根据需要计算出其他所有数据。其中的关键正是 DRY: Don’t Repeat Yourself。只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生。比如，你要编写一个任务清单应用，你只需要保存一个包含所有事项的数组，而无需额外保存一个单独的 state 变量（用于存储任务个数）。当你需要展示任务个数时，只需要利用该数组的 length 属性即可。

// 我们的示例应用拥有如下数据：

// 包含所有产品的原始列表
// 用户输入的搜索词
// 复选框是否选中的值
// 经过搜索筛选的产品列表
// 通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

// 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
// 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
// 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。
// 包含所有产品的原始列表是经由 props 传入的，所以它不是 state；搜索词和复选框的值应该是 state，因为它们随时间会发生改变且无法由其他数据计算而来；经过搜索筛选的产品列表不是 state，因为它的结果可以由产品的原始列表根据搜索词和复选框的选择计算出来。

ReactDom.render(
    <App />,
    document.getElementById('root')
)

// setInterval(() => {
//     tick()
// }, 1000);

// ReactDom.render(
//     <App />,
//     document.getElementById('root')
// )

