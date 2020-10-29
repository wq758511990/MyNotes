// import { createStore, applyMiddleware } from '../pages/day2/kRedux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state += 1
    case 'MINUS':
      return state -= 1
    default:
      return state
  }
}

const store = createStore(counterReducer, applyMiddleware(logger, thunk))
export default store