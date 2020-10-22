import logo from './logo.svg'
import style from './index.module.css'
import React, { useState, useEffect } from 'react';


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
const a = [1, 2, 3]

// 组件(class形式)
class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 组件挂在之后
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      }, () => {
        // console.log('set state done!') // setState 回调
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  componentDidUpdate() {
    // console.log('component update')
  }

  render() {
    return (
      <div>{this.state.date.toLocaleString()}</div>
    )
  }
}

// function 组件
function FunctionComponent(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => { // 副作用
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);//组件卸载的时候执⾏
  })
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

class SetStatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  changeValue = v => {
    this.setState({
      counter: this.state.counter + v
    }, () => {
      console.log('latest Counter', this.state.counter) // 回调中获取最新的counter
    });
    console.log("counter", this.state.counter);
  };

  setCounter = (val) => {
    this.changeValue(1);
    // this.changeValue(3); // 这里两次更改chageValue 状态， 更新会被合并为一次
  };

  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={() => this.setCounter('333')}>{this.state.counter}</button>
      </div>
    )
  }
}

const hello = (
  <div>hello, {name}
    <div>{formatName(obj)}</div>
    {greed}
    {show ? greed : '登录'}
    {show && greed}
    <ul>
      {/* {diff的时候会首先比较type， 然后比较key， 最后同级同类型元素，key值必须唯一} */}
      {a.map(item => (
        <li key={item}>{item ** 2}</li>
      ))}
    </ul>
    {/* {style={{width: '100px', height: '100px'}} } */}
    <img src={logo} className={style.logo} alt="" />
    <ClassComponent />
    <FunctionComponent />
    <SetStatePage />
  </div>
)

export default hello