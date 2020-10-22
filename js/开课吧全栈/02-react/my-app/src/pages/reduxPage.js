import React from 'react'
import store from '../store/ReduxStore'
import UserPage from './UserPage'

export default class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('subscribe')
      this.forceUpdate()
    })
  }

  add = () => {
    store.dispatch({ type: 'ADD' })
  }

  minus = () => {
    store.dispatch({ type: 'MINUS' })
  }

  render() {
    console.log('store', store)
    return (
      <div>
        <UserPage />
        <h3>reduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => this.add()}>+1</button>
        <button onClick={this.minus}>-1</button>
      </div>
    )
  }
}