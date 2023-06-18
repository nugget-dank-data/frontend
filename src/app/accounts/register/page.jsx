"use client"
import React, { useState } from "react";
import Image from "next/image";
import nugget from "../../../images/logo.png";
// import { Register } from "../../api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(error);
    setMessage(message);

    try {
      const response = await Register(email, password);
      setMessage(response.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="bg-[#070606ec] flex flex-col min-h-screen w-full">
      <div className="m-auto flex flex-col text-white items-center mb-0 slate-500 text-center justify-center">
        <Image src={nugget} alt="." className="w-36" />
        <h3 className="text-[3em] mt-10">Register</h3>
        <p className="font-sans text-[1.4em] mt-3">Register to start managing your store.</p>
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
            <a href="settings/reset_password" className="text-right underline text-[#cb44f5]">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-[#4b4bebec] text-white text-[1.4em] p-2 hover:bg-[#4b4bebfd] w-full rounded-xl m-auto mt-6"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <div className="text-white justify-center items-center text-center mt-4 text-[1.1em]">
          <p>
            Not registered yet? <a href="#" className="text-right underline text-[#cb44f5] ml-3">Request access</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;