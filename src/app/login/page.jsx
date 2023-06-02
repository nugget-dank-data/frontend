import React from "react";
import Image from "next/image";
import nugget from "../../images/logo.png";

const Login = () => {
  return (
    <div className="bg-[#070606ec] flex flex-col min-h-screen w-full">
      <div className="m-auto flex flex-col text-white items-center mb-0 slate-500 text-center justify-center">
        <Image src={nugget} alt="." className="w-36" />
        <h3 className="text-[3em] mt-10">Login</h3>
        <p className="font-sans text-[1.4em] mt-3">Login to start managing your store.</p>
      </div>
      <div className=" w-2/6 m-auto mt-8 justify-center items-center">
        <form action="" className="flex flex-col justify-center items-center">
          <input
            type="email"
            name=""
            placeholder="E-mail address"
            id=""
            className="bg-black p-4 rounded-lg m-4 hover:bg-white w-full"
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            id=""
            className="bg-black p-4 rounded-lg m-4 hover:bg-white w-full"
          /><div className="-mt-4 justify-end w-full text-right">
          <a href="settings/reset_password" className="text-right underline text-[#cb44f5]">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-[#4b4bebec] text-white text-[1.4em] p-2 hover:bg-[#4b4bebfd] w-full rounded-xl m-auto mt-6">Login</button>
        </form>
        <div className="text-white justify-center items-center text-center mt-4 text-[1.1em]">
          <p>Not registered yet?  <a href="#" className="text-right underline text-[#cb44f5] ml-3" >Request access</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
