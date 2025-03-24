import React from "react";

const AuthForm = ({ title, name, setName, password, setPassword, onSubmit, buttonText, switchText, switchButtonText, onSwitch }) => {
  return (
    <div className="auth-form">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">{buttonText}</button>
      </form>
      <p>{switchText}</p>
      <button onClick={onSwitch} className="switch-btn">{switchButtonText}</button>
    </div>
  );
};

export default AuthForm;
