import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const [signupInfo, setsignupInfo] = useState({ name: "", email: "", password: "" });


  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setsignupInfo(copySignupInfo);
    console.log(signupInfo);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", signupInfo);

    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const url = "http://localhost:3000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      console.log(result);

      const { success, message } = result;
      if (success) {
        toast.success("Signup Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (error) {
        const details = error?.details[0].message;
        toast.error("error", details);
      }
    } catch (error) {
      console.log("error YAHA H ", error);
    }
  };

  return (
    <div className="op flex justify-center items-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={signupInfo.name}
            className="w-full px-3 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            
            value={signupInfo.email}
            className="w-full px-3 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-100 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={signupInfo.password}
            className="w-full px-3 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>

        {/* Already have an account? Login */}
        <p className="text-center mt-4 text-gray-100 font-semibold">
          Already have an account ?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
