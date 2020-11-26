import React, { useState, useEffect } from 'react'

const LikeButton: React.FunctionComponent = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    console.log('running')
    document.title = `you clicked ${like} times, state is ${on}`
  }, [like, on])
  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like}👍</button>
      <button
        onClick={() => {
          setOn(!on)
        }}
      >
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton
