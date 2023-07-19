"use client"
import React, { useState } from "react";
import Image from "next/image";
import nugget from "../../../images/logo.png";
import axios from "axios";
import Link from "next/link";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  

  const url = 'http://34.75.96.129:420/users/login/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      console.log('logging in ..')
      const response = await axios.post(url, {
        email,
        password,
        username: email 
      });

   
      localStorage.setItem("login_key", response.data.key)
      console.log(response.data)



      setMessage("Login successful!");
      window.location.href = "/compare";
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };


  



  

 
  return (
    <div className="bg-[#070606ec] flex flex-col min-h-screen w-full">
      <div className="m-auto flex flex-col text-white items-center mb-0 slate-500 text-center justify-center">
        <Image src={nugget} alt="." className="w-36" />
        <h3 className="text-[3em] mt-10">Login</h3>
        <p className="font-sans text-[1.4em] mt-3">Login to start managing your store.</p>
      </div>
      <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto mt-8 justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail address"
            id=""
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-white hover:text-black w-full ${error ? 'border-red-500' : ''}`}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id=""
            className={`bg-black p-4 text-white rounded-lg m-4 hover:bg-white hover:text-black w-full ${error ? 'border-red-500' : ''}`}
          />
          <div className="-mt-4 justify-end w-full text-right">
            <Link href="/accounts/reset_password" className="text-right underline text-[#cb44f5]">
              Forgot Password?
            </Link>
          </div>
          {/* <Link href='/' className="w-full"> */}
          <button
            type="submit"
            className="bg-[#7F56D9] text-white text-[1.4em] p-2 hover:bg-[#5c35af] w-full rounded-xl m-auto mt-6"
            onClick={handleSubmit}
          >
            Login
          </button>
          {/* </Link> */}
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <div className="text-white justify-center items-center text-center mt-4 text-[1.1em]">
          <p>
            Not registered yet? <Link href="/accounts/register" className="text-right underline text-[#7F56D9] ml-3">Request access</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
