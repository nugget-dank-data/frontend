import React, { useState } from "react";
import { Chart } from "chart.js";

const PriceInventoryGraph = ({ priceData }) => {
  const [isWeeklyView, setIsWeeklyView] = useState(true);

  // Function to toggle between weekly and monthly view
  const handleViewToggle = () => {
    setIsWeeklyView(!isWeeklyView);
  };

  // Filter data based on the view type (weekly/monthly)
  const filteredData = isWeeklyView
    ? priceData.filter((data, index) => index % 7 === 0) // Show one data point per week
    : priceData.filter((data, index) => new Date(data.created_at).getDate() === 1); // Show one data point per month

  // Prepare the chart data for price trends
  const priceTrendData = {
    labels: filteredData.map((data) =>
      new Date(data.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    ),
    datasets: [
      {
        label: "Price",
        data: filteredData.map((data) => data.price),
        borderColor: "#000000",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
      },
    ],
  };

  // Prepare the chart data for inventory history
  const inventoryHistoryData = {
    labels: priceData.map((data) =>
      new Date(data.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    ),
    datasets: [
      {
        label: "Stock",
        data: priceData.map((data) => data.stock ?? 0),
        borderColor: "#000000",
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
      },
    ],
  };

  // Create the price trends chart
  const createPriceTrendChart = () => {
    const ctx = document.getElementById("priceTrendChart");
    new Chart(ctx, {
      type: "line",
      data: priceTrendData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#e5e5e5",
            },
          },
        },
      },
    });
  };

  // Create the inventory history chart
  const createInventoryHistoryChart = () => {
    const ctx = document.getElementById("inventoryHistoryChart");
    new Chart(ctx, {
      type: "line",
      data: inventoryHistoryData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "#e5e5e5",
            },
          },
        },
      },
    });
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
        <canvas id="priceTrendChart"></canvas>
      </div>

      {/* Inventory History */}
      <div className="inventory-history">
        <h3>Inventory History</h3>
        <canvas id="inventoryHistoryChart"></canvas>
      </div>
    </div>
  );
};

export default PriceInventoryGraph;
