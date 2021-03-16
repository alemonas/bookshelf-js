import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import {Logo} from 'components/Logo'
import Dialog from '@reach/dialog'
import {Button} from 'components/lib'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width={80} height={80} />
      <h1>Bookshelf</h1>
      <div>
        <Button onClick={() => setOpenModal('login')}>Login</Button>
      </div>
      <div>
        <Button onClick={() => setOpenModal('register')} variant="secondary">
          Register
        </Button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <Button onClick={() => setOpenModal('none')}>close</Button>
        <h2>Login</h2>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <Button onClick={() => setOpenModal('none')}>close</Button>
        <h2>Register</h2>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}

export default App
