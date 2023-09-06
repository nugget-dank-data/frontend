"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verifymail = () => {
  const verifyUrl = 'http://159.203.36.109:420/users/register/verify-email/';
  const [verificationKey, setVerificationKey] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // State for error message styling
  const [isSuccess, setIsSuccess] = useState(false); // State for success message styling


  useEffect(() => {

    const token = sessionStorage.getItem("login_key");
    
    const isUserInSession = !!token;
    console.log('userinsession',isUserInSession)
    
    if ( !isUserInSession) {
      
      
      window.location.href = '/accounts/login';
  console.log('reload Test fAILED')
    }
    }, [])
  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    if (lastPart) {
      setVerificationKey(lastPart);
    }
  }, []);

  const handleVerify = async () => {
    try {
      const response = await axios.post(verifyUrl, { key: verificationKey });
      setMessage(response.data.message);
      setIsError(false);
      setIsSuccess(true);
      // Redirect to login page after a brief delay
      setTimeout(() => {
        window.location.href = '/accounts/login'; 
      }, 2000);
    } catch (error) {
      if (error.response) {
        // If the response contains error details
        const errorCode = error.response.status;
        if (errorCode === 404) {
          setMessage('Key not found. Please check your verification link.');
        } else if (errorCode === 401) {
          setMessage('Unauthorized. check your link');
        } else {
          setMessage('An error occurred. Please try again.');
        }
      } else if (error.request) {
        // If the request was made but no response was received
        setMessage('No response from the server. Please try again later.');
      } else {
        // If an error occurred during the request setup
        setMessage('An error occurred. Please check your network connection.');
      }
      setIsError(true);
      setIsSuccess(false);
    }
  };
  

  return (
    <div className="bg-[#070606ec] flex flex-col min-h-screen w-full justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-8 items-center justify-center">
        <h2 className="text-2xl font-bold mb-6">Verify Your Email</h2>
        <button
          onClick={handleVerify}
          className="bg-[#7F56D9] hover:bg-[#6843b8] w-full text-white font-semibold py-2 px-4 rounded"
        >
          Verify
        </button>
        {isError && <p className="text-red-500 mt-4">{message}</p>}
        {isSuccess && <p className="text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Verifymail;
