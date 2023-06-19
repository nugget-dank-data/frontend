import React from "react";
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
  return (
    <div>
      {/* Price Trends */}
      <div className="price-trends">
        <h3>Price Trends</h3>
        <LineChart
          width={500}
          height={300}
          data={priceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
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
            formatter={(value) => `$${value}`}
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
            type="linear"
            dataKey="price"
            name="Price"
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
          <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
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
            formatter={(value) => `${value} in stock`}
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
            type="linear"
            dataKey="stock"
            name="Inventory"
            stroke="#000000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default PriceInventoryGraph;
