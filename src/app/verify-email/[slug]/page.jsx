"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verifymail = () => {
  const verifyUrl = 'http://159.203.36.109:420/users/register/verify-email/';
  const [verificationKey, setVerificationKey] = useState('');
  const [message, setMessage] = useState('');

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
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center -z-30">
      <div className="bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold mb-6">Verify Your Email</h2>
        <button
          onClick={handleVerify}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Verify
        </button>
        {message && <p className="text-gray-700 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Verifymail;
