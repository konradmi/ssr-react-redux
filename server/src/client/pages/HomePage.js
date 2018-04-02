import React from 'react'

const Home = () => {
  return (
    <div>
      <div>I'm the BEST home component</div>
      <button onClick={() => console.log('test')}>test</button>
    </div>
  )
}

export default {
  component: Home
}
