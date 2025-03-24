import React, { useState } from "react";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState("landing"); // Default landing screen
  const [userName, setUserName] = useState("");

  const handleSignup = (name, password, companyName, phoneNumber, email) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.name === name);

    if (userExists) {
      alert("User already exists!");
    } else {
      users.push({ name, password , companyName, phoneNumber, email });
      localStorage.setItem("users", JSON.stringify(users));
      setUserName(name);
      setScreen("home");
    }
  };

  const handleLogin = (name, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.name === name && user.password === password);

    if (user) {
      setUserName(name);
      setScreen("home");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    setUserName("");
    setScreen("landing");
  };

  return (
    <div className="w-[20vw] h-[40vw] bg-white shadow-lg rounded-2xl flex  p-[2vw]  mx-[40vw] my-[10vh] ">
      {screen === "landing" && (
        <div className="text-start flex flex-col justify-end items-center ">
          <h1 className="text-2xl font-bold">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            Your gateway to a smarter experience.
          </p>
          <button
            className="w-full bg-purple-600 text-white py-2 rounded-lg mb-2 hover:bg-purple-700 transition"
            onClick={() => setScreen("signup")}
          >
            Create Account
          </button>
          <button
            className="w-full bg-gray-200 text-purple-600 py-2 rounded-lg hover:bg-gray-300 transition"
            onClick={() => setScreen("login")}
          >
            Already Registered? Login
          </button>
        </div>
      )}

      {screen === "login" && <LoginForm onLogin={handleLogin} onSwitch={() => setScreen("signup")} />}
      {screen === "signup" && <SignUp onSignup={handleSignup} onSwitch={() => setScreen("login")} />}
      {screen === "home" && <Home userName={userName} onLogout={handleLogout} />}
    </div>
  );
};

export default App;
