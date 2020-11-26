import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  console.log('before render', positions.x)
  useEffect(() => {
    console.log('render', positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove', positions.x)
      document.removeEventListener('click', updateMouse)
    }
    // eslint-disable-next-line
  }, []) // []空数组表示 effect不依赖props或者state任何值
  return (
    <p>
      x: {positions.x} y: {positions.y}
    </p>
  )
}

export default MouseTracker
