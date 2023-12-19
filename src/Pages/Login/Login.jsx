import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true); // Show loading indicator

    try {
      const response = await axios.post(
        "https://api.jcloudwork.com/api/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Login error. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    // <div>
    //   <div className="login-page">
    //     <div className="login-container">
    //       <h2>Login</h2>
    //       <div className="login-form">
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
    //         <button onClick={handleLogin} disabled={isLoading}>
    //           {isLoading ? 'Logging in...' : 'Login'}{' '}
    //           {/* Button label changes when loading */}
    //         </button>
    //         <p className="forgot-password-link">
    //           <a href="/forgot-password">Forgot password?</a>
    //         </p>
    //         {error && <p className="error">{error}</p>}
    //       </div>
    //       {isLoading && <div className="loading-indicator">Loading...</div>}{' '}
    //       {/* Loading indicator */}
    //     </div>
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
                  {/* <!-- Submit Button --> */}
                  <div className="form-group">
                    <button
                      className="btn login-btn "
                      onClick={handleLogin}
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </button>
                  </div>

                  {error && <p className="error">{error}</p>}

                  {/* Loading indicator */}
                </form>
                <p className="py-2 allready-account">
                  Already have an account?
                  <Link className="signup" to="/signup">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
            {isLoading && <div className="loading-indicator">Loading...</div>}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
