import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setResetResponse] = useState('');
  const [status, setstatus] = useState(false)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('login_key');
        const headers = {
          Authorization: `Token ${token}`
        };

        const response = await axios.get('http://34.75.96.129:420/users/user/', { headers });
        console.log(response)
        const { first_name, last_name, email, pk, phonenumber } = response.data;

        setFirstName(first_name);
        setLastName(last_name);
        setEmail(email)
        setPhonenumber(phonenumber)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, []);

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post('http://34.75.96.129:420/users/password/reset/', { email });
      console.log(response)
      setResetResponse(response.data.detail);
      if(response.status == 200){
        setstatus(true);
      }
      else{setstatus(false)}
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='relative'>
      <div className={status ? 'text-green-500 bg-green-100 flex float-left flex-col absolute p-4 right-0 top-0 w-1/4': 'text-red-500 bg-red-100 flex right-0 flex-col absolute top-0 w-1/4'}>{message}</div>


      <div className="profile">
        <h1 className='text-2xl font-semibold'>Profile</h1>

        <div className="info flex flex-col">
          <div className="firstname flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className='edit text-[0.9em] text-[#999797]'>firstname</span>
            <span className='text-[1.2em]'>{firstName}</span>
          </div>
          <div className="lastname flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className='edit text-[0.9em] text-[#999797]'>lastname</span>
            <span className='text-[1.2em]'>{lastName}</span>
          </div>
        </div>
      </div>

      <div className="personal-info">
        <h1 className='text-2xl font-semibold font-press-start'>Personal Information</h1>
        <div className="info flex flex-col">
          <div className="email flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className='edit text-[0.9em] text-[#999797]'>Email address</span>
            <span className='text-[1.2em]'>{email}</span>
          </div>
          <div className="phonenumber flex flex-col px-4 rounded-lg border m-4 min-w-[4em] max-w-[40%]">
            <span className='edit text-[0.9em] text-[#999797]'>Phone number</span>
            <span className='text-[1.2em]'>{phonenumber}</span>
          </div>
        </div>
      </div>

      <div className="button">
        <button onClick={handlePasswordReset} className="flex ml-3 text-white items-center p-2 rounded-lg text-center bg-[#2804ac]">Reset Password</button>
      </div>
    </div>
  );
};

export default Accounts;
