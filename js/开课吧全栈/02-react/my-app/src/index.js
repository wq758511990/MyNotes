import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import style from './index.module.css'
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg'

const name = 'xiaobai'
const obj = { // 对象不能直接放在jsx里
  firstName: 'harry',
  lastName: 'potter'
}
function formatName(name) {
  return name.firstName + ' ' + name.lastName
}
const greed = <div>good</div> // jsx中可以插入另一个jsx
const show = false
const a = [0, 1, 2]
const hello = (
  <div>hello, {name}
    <div>{formatName(obj)}</div>
    {greed}
    {show ? greed : '登录'}
    {show && greed}
    <ul>
      {/* {diff的时候会首先比较type， 然后比较key， 最后同级同类型元素，key值必须唯一} */}
      {a.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {/* {style={{width: '100px', height: '100px'}} } */}
    <img src={logo} className={style.logo} alt=""/>
  </div>
)

ReactDOM.render(hello,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
