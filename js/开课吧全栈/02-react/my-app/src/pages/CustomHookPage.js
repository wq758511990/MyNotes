import React, { useEffect, useState } from 'react'

export default function CustomHookPage() {
  const [count, setCount] = useState(0) // 此处是[] 而非解构{} 即useState 返回的是数组
  useEffect(() => {
    console.log('count effect')
    document.title = `点击了${count}次`
  }, [count])

  return (
    <div>
      <h3>CustomHookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}

// 自定义Hook， 以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('date effect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timer)
  }, [])
  return date
}
