import React, { useState } from 'react'
import axios from '../../api/axios'
import './Registration.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Registration() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate() // Use the useNavigate hook

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', {
        username,
        password,
      })
      if (response.data.success) {
        setIsRegistered(true)

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    } catch (error) {
      console.error('Registration failed', error)
    }
  }

  return (
    // <div>
    //   <div className="registration-page">
    //     <div className="registration-container">
    //       <h2>Registration</h2>
    //       <div className="registration-form">
    //         <input
    //           type="text"
    //           placeholder="Username"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //         />
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <button onClick={handleRegistration}>Register</button>
    //       </div>
    //       {isRegistered && (
    //         <p className="success-message">
    //           Registration successful. Redirecting...
    //         </p>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="register_box">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 d-block m-auto ">
            <div className="card  rounded-4 my-5">
              <div className="card-header">
                <h3 className="text-login">Registration</h3>
              </div>
              <div className="card-body">
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
                </div>
                {/* <!-- Submit Button --> */}
                <div className="form-group">
                  <button
                    onClick={handleRegistration}
                    className="btn register-btn "
                  >
                    Register
                  </button>
                </div>

                {/* Loading indicator */}

                <p className="py-2 allready-account">
                  Already have an account?
                  <Link className="signup" to="/login">
                    SignIn
                  </Link>
                </p>
                {isRegistered && (
                  <p className="success-message">
                    Registration successful. Redirecting...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
