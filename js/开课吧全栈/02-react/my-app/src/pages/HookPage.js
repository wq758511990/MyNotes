import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
  // 声明⼀个叫 “count” 的 state 变量，初始化为0
  const [counts, setCounts] = useState(0) // set + '变量名' 变量名首字母大写
  const [date, setDate] = useState(new Date())
  // 与 componentDidMount 和 componentDidUpdate相似
  useEffect(() => {
    console.log('update 1')
    document.title = `clicked ${counts} times`
  }, [counts])

  useEffect(() => {
    console.log('update 2')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timer)
  }, []) // [] 空数组表示不随数据改变而改变,若不传参数代表任意值改变均会再次触发该effect

  return (
    <div>
      <h3>Hook Page</h3>
      <p>{counts}</p>
      <button onClick={() => setCounts(counts + 1)}>add</button>
      <p>{date.toLocaleString()}</p>
    </div>
  )
}