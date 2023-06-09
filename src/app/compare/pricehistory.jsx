import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Pricehistory = ({ priceData, inventoryData }) => {
    const [startDate, setStartDate] = useState(''); // State to store the start date filter
    const [endDate, setEndDate] = useState(''); // State to store the end date filter
  
    // Filter the price data based on the start and end dates
    const filteredPriceData = priceData.filter((data) => {
      if (startDate && endDate) {
        return data.date >= startDate && data.date <= endDate;
      } else if (startDate) {
        return data.date >= startDate;
      } else if (endDate) {
        return data.date <= endDate;
      }
      return true;
    });
  
    return (
      <div>
        {/* Price History */}
        <h2>Price History</h2>
        <LineChart width={800} height={400} data={filteredPriceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" name="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
  
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
            {inventoryData.map((data) => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Pricehistory;
  