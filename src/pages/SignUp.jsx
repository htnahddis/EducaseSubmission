import React, { useState } from "react";

const SignUp = ({ onSignup, onSwitch }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(name, phoneNumber, email, password, companyName, isAgency);
  };

  const isFormFilled =
    name.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    companyName.trim() !== "" &&
    isAgency !== null;

  return (
    <div className="bg-white p-6 shadow-md rounded-md w-[350px] mx-auto">
      <h1 className="font-extrabold text-2xl">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Full Name<span className="text-red-500">*</span></label>
          <input
            className="border rounded-md p-2 mt-1"
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Phone number<span className="text-red-500">*</span></label>
          <input
            className="border rounded-md p-2 mt-1"
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Email address<span className="text-red-500">*</span></label>
          <input
            className="border rounded-md p-2 mt-1"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Password<span className="text-red-500">*</span></label>
          <input
            className="border rounded-md p-2 mt-1"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Company name</label>
          <input
            className="border rounded-md p-2 mt-1"
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* Are you an Agency? */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700">Are you an Agency?<span className="text-red-500">*</span></label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={isAgency === "Yes"}
                onChange={() => setIsAgency("Yes")}
                className="w-4 h-4 text-purple-600"
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={isAgency === "No"}
                onChange={() => setIsAgency("No")}
                className="w-4 h-4 text-purple-600"
              />
              No
            </label>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className={`p-3 w-full rounded-md transition-all duration-200 ${
            isFormFilled ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-500"
          }`}
          disabled={!isFormFilled}
        >
          Create Account
        </button>
      </form>

      <button
        onClick={onSwitch}
        className="text-purple-600 text-sm mt-4 hover:underline"
      >
        Go back to login
      </button>
    </div>
  );
};

export default SignUp;
