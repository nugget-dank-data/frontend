import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import search from '../../images/brand.svg'
import Image from 'next/image';

const Pricehistory = ({ priceData }) => {
  const [startDate, setStartDate] = useState(''); // State to store the start date filter
  const [endDate, setEndDate] = useState(''); // State to store the end date filter

  console.log(priceData)

  // // Filter the price data based on the start and end dates
  // const filteredPriceData = priceData.filter((data) => {
  //   if (startDate && endDate) {
  //     return data.date >= startDate && data.date <= endDate;
  //   } else if (startDate) {
  //     return data.date >= startDate;
  //   } else if (endDate) {
  //     return data.date <= endDate;
  //   }
  //   return true;
  // });

  return (
    <div className='h-[90vh] bg-[#f7f2f2] absolute m-auto rounded-lg z-50 right-[40% left-[40%] flex flex-col w-2/4'>
      {/* Price History */} 
       <h2>Price History</h2>
      
      <div className='relative w-full rounded-lg m-5'>
        <input type="search" className=' p-3 border rounded-lg' />
        <Image src={search} alt='ss' className='top-0 absolute' />
      </div>

      {/* Filters */}
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      {/* Inventory History */}
      <h2>Inventory History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td>{priceData.date}</td>
              <td>{priceData.time}</td>
              <td>{priceData.stock}</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default Pricehistory;
