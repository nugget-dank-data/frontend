import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const PriceInventoryGraph = ({ priceData }) => {
  const [isWeeklyView, setIsWeeklyView] = useState(true);

  // Filter data based on the view type (weekly/monthly)
  const filteredData = isWeeklyView
    ? priceData.filter((data, index) => index % 7 === 0) // Show one data point per week
    : priceData.filter((data, index) => new Date(data.created_at).getDate() === 1); // Show one data point per month

  // Function to toggle between weekly and monthly view
  const handleViewToggle = () => {
    setIsWeeklyView(!isWeeklyView);
  };

  return (
    <div>
      {/* Price Trends */}
      <button
        onClick={handleViewToggle}
        className="py-2 rounded-lg px-1 m-auto justify-center align-middle text-white bg-[#7F56D9]"
      >
        {isWeeklyView ? "Switch to Monthly View" : "Switch to Weekly View"}
      </button>
      <div className="price-trends">
        <h3>Price Trends</h3>
        <LineChart
          width={500}
          height={300}
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#000000" />
          <XAxis
            dataKey="created_at"
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }
            stroke="#000000"
          />
          <YAxis stroke="#000000" />
          <Tooltip
            formatter={(value) => `$${value ?? 0}`}
            labelFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            name=""
            stroke="#000000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      {/* Inventory History */}
      <div className="inventory-history">
        <h3>Inventory History</h3>
        <LineChart
          width={500}
          height={300}
          data={priceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#000000" />
          <XAxis
            dataKey="created_at"
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }
            stroke="#000000"
          />
          <YAxis stroke="#000000" />
          <Tooltip
            formatter={(value) => `${value ?? 0} in stock`}
            labelFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={"stock" ?? [0, 5, 10, 15]}
            name=""
            stroke="#000000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default PriceInventoryGraph;
