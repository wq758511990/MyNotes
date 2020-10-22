import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/ReduxStore'
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import test1 from './test_1'
// import UserPage from './pages/UserPage'
// import Card from './pages/Card'
// import ReduxPage from './pages/reduxPage'
// import ReactReduxPage from './pages/ReactReduxPage'
// import RouterPage from './pages/RouterPage'
// import HookPage from './pages/HookPage'
// import CustomHookPage from './pages/CustomHookPage'
// import UseMemoPage from './pages/UseMomePage'
import UseCallback from './pages/useCallback'




ReactDOM.render(<Provider store={store}><UseCallback /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
