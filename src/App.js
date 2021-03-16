import React from 'react'
import {Logo} from 'components/Logo'

function App() {
  return (
    <div>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('login clicked')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('Register clicked')}>Register</button>
      </div>
    </div>
  )
}

export default App
