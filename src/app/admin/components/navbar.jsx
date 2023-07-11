import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import notifications from '../../../images/notification.svg'
import Image from 'next/image';

const AdminNavbar = (props) => {
  const history = useNavigate();
  const [pageTitle, setPageTitle] = useState('');

  const handleGoBack = () => {
    history(-1);
  };

  const handleRouteChange = (pathname) => {
    const getPageTitle = () => {
      switch (pathname) {
        case '/admin/organizations':
          return 'Organizations';
        case '/admin/manage-stores':
          return 'Manage Stores';
      
        default:
          return 'Unknown Page';
      }
    };

    setPageTitle(getPageTitle());
  };
  useEffect(() => {
    
    handleRouteChange(window.location.pathname);
  }, []);

  return (
    <div className=''>
      <div className='p-5 justify-between flex flex-col border-b w-full'>
        <div className='p-5 justify-between flex w-full'>
          <button onClick={handleGoBack} className='flex items-center'>
            <FiArrowLeft className='mr-2' />
            Back
          </button>
          
          <Image src={notifications} />
        </div>
      </div>
      {pageTitle && <p className='text-[2em] font-medium ml-8 md:ml-0'>{pageTitle}</p>}
    </div>
  );
};

export default AdminNavbar;
