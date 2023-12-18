// Logout.js
import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Implement a function to log the user out on the server-side
    // e.g., sending a request to '/api/logout'

    // After successful logout on the server, call onLogout to clear the user state in your app
    onLogout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
