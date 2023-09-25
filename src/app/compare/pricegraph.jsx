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

  const handleViewToggle = () => {
    setIsWeeklyView(!isWeeklyView);
  };

  console.log('hereee:::',priceData)

  // const priceData = isWeeklyView
  //   ? priceData.filter((data, index) => index % 7 === 0)
  //   : priceData.filter((data) => new Date(data.created_at).getDate() === 1);

  return (
    <div>
      <button
        onClick={handleViewToggle}
        className="py-2 px-4 rounded-lg m-auto text-white bg-[#7F56D9] hover:bg-[#5c3da7] focus:outline-none"
      >
        {isWeeklyView ? "Switch to Monthly View" : "Switch to Weekly View"}
      </button>
      <div className="price-trends">
        <h3>Price Trends</h3>
        <LineChart
          width="100%"
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
      <div className="inventory-history">
        <h3>Inventory History</h3>
        <LineChart
          width="100%"
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
