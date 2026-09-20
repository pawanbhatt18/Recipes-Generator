import React, { useState } from "react";
import {toast, ToastContainer} from "react-toastify"
import {useNavigate} from "react-router-dom"

const Login = () => {
  
  const [loginInfo ,setloginInfo ] = useState({ email : "", password : ""})
  const handleChange =(e)=>{
  const{name,value} = e.target
  const copyloginInfo ={...loginInfo}
  copyloginInfo[name]= value
  setloginInfo(copyloginInfo)
  }
  const navigate=  useNavigate()
 const handleSubmit= async(e)=>{
e.preventDefault();
console.log("form submitted",loginInfo);
 const{email,password} = loginInfo
 if ( !email || !password) {
  return toast.error("All fields are required");
}
try {
  const url = "http://localhost:3000/auth/login";
  const response=  await fetch (url,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"  
      },
      body: JSON.stringify(loginInfo)
  })
  const result=  await response.json()
  console.log(result);
  
  const{success,jwtToken, name, message} =result
  if(success){
    localStorage.setItem("jwtToken", jwtToken)
    localStorage.setItem("loggedinuser ", name)
    console.log("loggin Sucessfully")
    toast.success("loggin Sucessfully")
    setTimeout(() => {
      navigate("/")
    }, 2000);
  } 
  else if(error){
    const details= error?.details[0].message
toast.error("error",details)
  }
  
} catch (error) {
  console.log("error YAHA H " )
}
 }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit}  className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        
        <h2 className="text-3xl text-white font-semibold text-center tracking-wide mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-100 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
          
           onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={loginInfo.email}
            className="w-full px-3 text-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            value={loginInfo.password}
            className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300"
        >
         Login 
        </button>
        
        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-100 font-semibold">
          Don't have an account ? <a href="/signup" className="text-white hover:underline">Sign up here</a>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
