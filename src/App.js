import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import {Logo} from 'components/Logo'
import Dialog from '@reach/dialog'

function App() {
  const [openModal, setOpenModal] = useState('none')
  return (
    <div>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')}>close</button>
        <h2>Login</h2>
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')}>close</button>
        <h2>Register</h2>
      </Dialog>
    </div>
  )
}

export default App
