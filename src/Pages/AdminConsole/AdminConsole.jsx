// AdminConsole.js
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar' // Import the Navbar component
import Footer from '../../Components/Foooter/Footer' // Import the Footer component
import AdminPanel from '../../Components/AdminPanel/AdminPanel'
import LoginAdmin from '../../Components/LoginAdmin/LoginAdmin'

const AdminConsole = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      {loggedIn ? (
        <div>
          <AdminPanel handleLogout={handleLogout} />
        </div>
      ) : (
        <LoginAdmin onLogin={handleLogin} />
      )}
    </div>
  )
}

export default AdminConsole
