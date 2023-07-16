import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import close from '../../../images/close.svg'

const AddStore = (prop) => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(''); 

  useEffect(() => {
    // Fetch all stores from the API endpoint
    const fetchStores = async () => {
      try {
        const response = await fetch('http://34.75.96.129:420/users/organization-compset-store/');
        const data = await response.json();
        console.log('Fetched data:', data); // Check the value of data
        setStores(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };
  
    fetchStores();
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setSelectedStore('');
  };

  return (
    <div className="flex w-full items-center justify-center h-screen left-0 right-0 top-0 z-50 bg-[#bbbabaeb] fixed">
      <div className="rounded-xl bg-[#ffff] flex flex-col p-4 ">
        <div className="top">
          <Image
            src={close}
            alt="cc"
            onClick={prop.handleclose}
            className="w-[1.5em] mr-2 mt-2 float-right cursor-pointer"
          />
        </div>

        <div className="heading text-[1.5em] font-bold text-center">
          <h1>Add store</h1>
        </div>

        <div className="form flex flex-col p-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="text" className="text-[1.2em] font-bold mb-2 mt-2">
              Compset Name (Optional)
            </label>
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              className="p-4 w-[20em] mb-4 bg-white rounded-lg"
            >
              {stores && stores.length > 0 ? (
                stores.map((store) => (
                  <option key={store.store_id} value={store.store_id}>
                    {store.title}
                  </option>
                ))
              ) : (
                <option value="">No stores available</option>
              )}
            </select>
            <button
              type="submit"
              className="bg-[#2804ac] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Submit
            </button>
          </form>
        </div>

        <p className="text-center text-[#2804ac] cursor-pointer" onClick={prop.handleclose}>
          Cancel
        </p>
      </div>
    </div>
  );
};

export default AddStore;
