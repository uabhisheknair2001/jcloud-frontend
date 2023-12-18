import React, { useState } from 'react'
import './LoginAdmin.css'

const LoginAdmin = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username === 'check' && password === '123456') {
      onLogin()
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    // <div className="login-container-admin">
    //   <h2 className="heading-admin">Login</h2>
    //   <div>
    //     <input
    //       type="text"
    //       className="input-admin"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="password"
    //       className="input-admin"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   {error && <p className="error-admin">{error}</p>}
    //   <div>
    //     <button className="button-admin" onClick={handleLogin}>
    //       Login
    //     </button>
    //   </div>
    // </div>
    <div className="Login_box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 d-block m-auto ">
            <div className="card  rounded-4 my-5">
              <div className="card-header">
                <h3 className="text-login">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  {/* <!-- Email Field --> */}
                  <label htmlFor="username">Username</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter the username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="error-admin">{error}</p>}
                  {/* <!-- Password Field --> */}
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder=" Enter the Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <p className="forgot-password-link">
                      <a href="/forgot-password">Forgot password?</a>
                    </p>
                  </div>
                  {error && <p className="error-admin">{error}</p>}
                  {/* <!-- Submit Button --> */}
                  <div className="form-group ">
                    <button className="btn login-btn " onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin
