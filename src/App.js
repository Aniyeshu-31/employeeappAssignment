import React, { useState } from 'react'
import Login from './components/Authentication/Login'
import UserManagement from './components/Users/UserManagement'

function App() {
  const [token, setToken] = useState(null)

  return token ? (
    <UserManagement token={token} />
  ) : (
    <Login onLogin={setToken} />
  )
}

export default App;