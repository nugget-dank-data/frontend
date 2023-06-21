"use client"
import React, { useState } from "react";
import Image from "next/image";
import nugget from "../../../images/logo.png";
import axios from "axios";
import eyedark from "../../../images/eyedark.png";
import eye from "../../../images/eye.png";
import eyecloseddark from "../../../images/eyecloseddark.png";
import eyeclosed from "../../../images/eyeclosed.png";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setLoading(true);

    try {
      // Check if passwords match
      if (password !== password2) {
        setErrors({ password2: "Passwords do not match" });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://159.203.36.109:420/users/register/",
        {
          email,
          password,
          password2,
          first_name: firstname,
          last_name: lastname,
        }
      );
      setMessage(response.data.detail);
      if (response.status === 200) {
        // Registration successful, redirect to login page
        window.location.href = "/login";
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#070606ec] flex flex-col min-h-screen w-full pb-24">
      <div className="m-auto flex flex-col text-white items-center mb-0 slate-500 text-center justify-center">
        <Image src={nugget} alt="." className="w-[12em]" />
        <h3 className="text-[3em] mt-10">Register</h3>
        <p className="font-sans text-[1.4em] mt-3">
          Register to start managing your store.
        </p>
      </div>
      <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto mt-8 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          {errors.email && <p className="text-red-500 mb-2">{errors.email[0]}</p>}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail address"
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-[#d6f6fc] hover:text-black w-full ${
              errors.email ? "border-red-500 border" : ""
            }`}
          />

          {errors.first_name && <p className="text-red-500 mb-2">{errors.first_name[0]}</p>}
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-[#d6f6fc] hover:text-black w-full ${
              errors.first_name ? "border-red-500 border " : ""
            }`}
          />

          {errors.last_name && <p className="text-red-500 mb-2">{errors.last_name[0]}</p>}
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last Name"
            className={`bg-black text-white p-4 rounded-lg m-4 hover:bg-[#d6f6fc] hover:text-black w-full ${
              errors.last_name ? "border-red-500 border" : ""
            }`}
          />

          <div className="relative w-full flex flex-col items-center p-0">
            {errors.password && <p className="text-red-500 mb-2">{errors.password[0]}</p>}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`bg-black p-4 text-white rounded-lg hover:bg-[#d6f6fc] hover:text-black w-full ${
                errors.password ? "border-red-500 border " : ""
              }`}
            />
            <span
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                errors.password ? "top-2/3" : "" }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Image src={eye} /> : <Image src={eyeclosed} />}
            </span>
          </div>

          <div className="relative w-full flex flex-col items-center p-0 mt-4">
          {errors.password2 && <p className="text-red-500 mb-2">{errors.password2[0]}</p>}
            <input
              type={showPassword ? "text" : "password"}
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm Password"
              className={`bg-black p-4 text-white rounded-lg hover:bg-[#d6f6fc] hover:text-black w-full ${
                errors.password2 ? "border-red-500 border" : ""
              }`}
            />
            <span
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${
                errors.password2 ? "top-2/3" : "" }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Image src={eye} /> : <Image src={eyeclosed} />}
            </span>
          </div>

          <button
            type="submit"
            className="bg-[#4b4bebec] text-white text-[1.4em] p-2 hover:bg-[#2d2da0fd] w-full rounded-xl m-auto mt-6"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

        {errors.general && <p className="text-red-500 mt-4">{errors.general}</p>}
        {message && <p className="text-green-500 mt-4">{message}</p>}

        <div className="text-white justify-center items-center text-center mt-4 text-[1.1em]">
          <p>
            Already registered?{" "}
            <Link href="accounts/login" className="text-right underline text-[#cb44f5] ml-3">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;