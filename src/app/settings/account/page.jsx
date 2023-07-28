"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import ChangeEmail from "./changemail";

const Accounts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setResetResponse] = useState("");
  const [status, setstatus] = useState(false);
  const [showupdatemail, setshowupdatemail] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const token = localStorage.getItem("login_key");
  //       const headers = {
  //         Authorization: `Token ${token}`,
  //       };

  //       const response = await axios.get(
  //         "http://34.75.96.129:420/users/user/",
  //         { headers }
  //       );
  //       console.log(response);
  //       const { first_name, last_name, email, pk, phonenumber } = response.data;

  //       setFirstName(first_name);
  //       setLastName(last_name);
  //       setEmail(email);
  //       setPhonenumber(phonenumber);
  //       localStorage.setItem("user_id", pk);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUserDetails();
  // }, []);

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post(
        "http://34.75.96.129:420/users/password/reset/",
        { email }
      );
      console.log(response);
      setResetResponse(response.data.detail);
      if (response.status == 200) {
        setstatus(true);
      } else {
        setstatus(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showeditmail = () => {
    setshowupdatemail(!showupdatemail);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    handleUpdateUser();
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    handleUpdateUser();
  };

  const handleFirstNameEdit = () => {
    setIsEditingFirstName(true);
  };

  const handleLastNameEdit = () => {
    setIsEditingLastName(true);
  };

  const handleFirstNameBlur = () => {
    setIsEditingFirstName(false);
  };
  const handleLastNameBlur = () => {
    setIsEditingFirstName(false);
  };

  const handleUpdateUser = () => {
    const token = localStorage.getItem("login_key");
    const userToUpdate = {
      first_name: firstName,
      last_name: lastName,
    };

    const headers = {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .put("http://34.75.96.129:420/users/user/", userToUpdate, { headers })
      .then((response) => {
        console.log("User updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="relative">
      <div
        className={
          status
            ? "text-green-500 bg-green-100 flex float-left flex-col absolute p-4 right-0 top-0 w-1/4"
            : "text-red-500 bg-red-100 flex right-0 flex-col absolute top-0 w-1/4"
        }
      >
        {message}
      </div>
      {showupdatemail && <ChangeEmail handleclose={showeditmail} />}

      <div className="profile flex flex-col justify-end">
        <h1 className="text-2xl m-4 mb-1 font-semibold">Profile</h1>

        <div className="info flex flex-col">
          <div className="firstname flex flex-col px-4 rounded-lg border m-4 mt-1 min-w-[4em] max-w-[40%]">
            <span className="edit text-[0.9em] text-[#999797]">Firstname</span>
            {isEditingFirstName ? (
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameBlur}
                autoFocus
                className="focus:outline-none"
              />
            ) : (
              <span
              className={`text-[1.2em] ${
                firstName.trim() === "" ? "py-3" : ""
              }`}
              onClick={handleLastNameEdit}
            >
              {firstName}
            </span>
            )}
          </div>
          <div className="lastname flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className="edit text-[0.9em] text-[#999797]">Lastname</span>
            {isEditingLastName ? (
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                onBlur={handleLastNameBlur}
                autoFocus
                className="focus:outline-none"
              />
            ) : (
              <span
                className={`text-[1.2em] ${
                  lastName.trim() === "" ? "py-3" : ""
                }`}
                onClick={handleLastNameEdit}
              >
                {lastName}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="personal-info">
        <h1 className="text-2xl font-semibold font-press-start m-4 mt-8 mb-1">
          Personal Information
        </h1>
        <div className="info flex flex-col">
          <div
            className="email flex flex-col px-4 rounded-lg border m-4 mt-1 min-w-[4em] max-w-[40%]"
            onClick={showeditmail}
          >
            <span className="edit text-[0.9em] text-[#999797]">
              Email address
            </span>
            <span className={`text-[1.2em] ${email.trim() === "" ? "py-3" : ""}`}>{email}</span>
          </div>
          <div className="phonenumber flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className="edit text-[0.9em] text-[#999797]">
              Phone number
            </span>
            <span className={`text-[1.2em] ${phonenumber.trim() === "" ? "py-3" : ""}`}>{phonenumber}</span>
          </div>
        </div>
      </div>

      <div className="button">
        <button
          onClick={handlePasswordReset}
          className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#7F56D9]"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Accounts;
