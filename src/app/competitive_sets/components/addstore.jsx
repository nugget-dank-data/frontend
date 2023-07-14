import React, { useState, useEffect } from 'react';

const AddStore = (handleClose) => {
  const [stores, setStores] = useState([]); // State to store the list of stores
  const [selectedStore, setSelectedStore] = useState(''); // State to track the selected store

  useEffect(() => {
    // Fetch all stores from the API endpoint
    const fetchStores = async () => {
      try {
        const response = await fetch('http://34.75.96.129:420/users/organization-compset-store/');
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the submit logic using the selected store
    // Submit the selectedStore to the API endpoint specified in submiturlurl

    // Clear the selected store
    setSelectedStore('');
  };

  return (
    <div className="flex w-full min-h-full z-50 bg-[#bbbabaeb] absolute">
      <div className="rounded-xl bg-[#ffff] flex flex-col m-auto p-4 ">
        <div className="top">
          <Image
            src={close}
            alt="cc"
            onClick={handleClose}
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
              className="p-2 mb-4"
            >
              {/* Map over the stores and display them as options */}
              {stores.map((store) => (
                <option key={store.store_id} value={store.store_id}>
                  {store.title}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-[#2804ac] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
            >
              Submit
            </button>
          </form>
        </div>

        <p className="text-center text-[#2804ac] cursor-pointer" onClick={handleClose}>
          Cancel
        </p>
      </div>
    </div>
  );
};

export default AddStore;
