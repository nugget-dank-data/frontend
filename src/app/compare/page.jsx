"use client"
import React, { useState, useEffect } from 'react';

const Compare = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');

  useEffect(() => {
    // Fetch stores from API
    const fetchStores = async () => {
      try {
        const response = await fetch('your-api-url'); // Replace 'your-api-url' with the actual API endpoint
        const data = await response.json();
        setStores(data); // Set the fetched stores in state
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleStoreChange = (e) => {
    setSelectedStore(e.target.value);
  };

  return (
    <div className='p-2 bg-red-100 flex flex-row'>
      <div className='store p-2'>
        <h1>Store</h1>
        <select name='store' id='store' value={selectedStore} onChange={handleStoreChange} className='p-4 rounded-lg w-full'>
          <option value=''>Select a store</option>
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>
      <div className='filters w-full'>
        <h1>Filters</h1>
      </div>
    </div>
  );
};

export default Compare;
