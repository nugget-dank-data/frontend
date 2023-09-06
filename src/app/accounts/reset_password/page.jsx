"use client"
import React, { useState } from "react";
import Image from "next/image";
import nugget from "../../../images/logo.png";
import axios from "axios";
import { usePathname } from 'next/navigation';


const ResetPassword = () => {
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  
  
  const uid = pathname.split('/')[3];
  const token = pathname.split('/')[4];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post('http://35.229.42.75:420/users/password/reset/confirm/', {
        new_password1: newPassword1,
        new_password2: newPassword2,
        uid,
        token
      });

      setMessage("Password reset successful!");
      router.push("/accounts/login");
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
        <h3 className="text-[3em] mt-10">Reset Password</h3>
        <p className="font-sans text-[1.4em] mt-3">Enter your new password</p>
      </div>
      <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto mt-8 justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <input
            type="password"
            name="newPassword1"
            value={newPassword1}
            onChange={(e) => setNewPassword1(e.target.value)}
            placeholder="New Password"
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-white hover:text-black w-full ${error ? 'border-red-500' : ''}`}
          />
          <input
            type="password"
            name="newPassword2"
            value={newPassword2}
            onChange={(e) => setNewPassword2(e.target.value)}
            placeholder="Confirm New Password"
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-white hover:text-black w-full ${error ? 'border-red-500' : ''}`}
          />
          <button
            type="submit"
            className="bg-[#7F56D9] text-white text-[1.4em] p-2 hover:bg-[#5c35af] w-full rounded-xl m-auto mt-6"
          >
            Reset Password
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
