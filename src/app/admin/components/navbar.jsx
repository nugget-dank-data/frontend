import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { HiOutlineBell } from 'react-icons/hi';

const AdminNavbar = ({ prop }) => {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <div className=''>
      <div className='p-5 justify-between flex flex-col border-b w-full'>
        <div className='p-5 justify-between flex w-full'>
          <button onClick={handleGoBack} className='flex items-center'>
            <FiArrowLeft className='mr-2' />
            Back
          </button>
          <HiOutlineBell className='ml-4' />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
