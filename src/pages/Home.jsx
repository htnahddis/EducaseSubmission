import React from "react";

const Home = ({ userName, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <p>You are now logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
