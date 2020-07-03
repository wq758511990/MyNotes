import React from "react"
import ReactDom from 'react-dom'

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

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Sam" />
            <Welcome name="Tom" />
        </div>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)