import React, { useState } from "react";

const LoginForm = ({ onLogin, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="">
      <h1 className="font-extrabold text-2xl">Signin to your PopX account</h1>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-purple-600">Email Address</label>
          <input
            className="border rounded-md p-2 mt-1"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-bold text-purple-600">Password</label>
          <input
            className="border rounded-md p-2 mt-1"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`flex justify-center items-center p-3 w-full rounded-md transition-all duration-200 ${
            isFormFilled ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-500"
          }`}
          disabled={!isFormFilled}
        >
          Login
        </button>
      </form>

      <button
        onClick={onSwitch}
        className="text-purple-600 text-sm mt-2 hover:underline"
      >
        Create an account
      </button>
    </div>
  );
};

export default LoginForm;
