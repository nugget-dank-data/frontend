import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PriceInventoryGraph = ({ priceData }) => {
  const [isWeeklyView, setIsWeeklyView] = useState(true);
  const priceChartRef = useRef(null);
  const stockChartRef = useRef(null);

  useEffect(() => {
    console.log(priceData)
    priceData.map((data) =>{
      
    })
    const priceCtx = priceChartRef.current.getContext("2d");
    const stockCtx = stockChartRef.current.getContext("2d");

    const priceChart = new Chart(priceCtx, {
      type: "line",
      data: {
        labels: priceData.map((data) =>
          new Date(data.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            // year: "numeric",
          })
        ),
        datasets: [
          {
            label: "Price",
            data: priceData.map((data) => data.price),
            borderColor: "#000000",
            fill: false,
            pointRadius: 2, // Adjust the point size
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {},
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Price',
            },
          },
        },
      },
    });

    const stockChart = new Chart(stockCtx, {
      type: "line",
      data: {
        labels: priceData.map((data) =>
          new Date(data.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            // year: "numeric",
          })
        ),
        datasets: [
          {
            label: "stock",
            data: priceData.map((data) => data.stock),
            borderColor: "#000000",
            fill: false,
            pointRadius: 2, // Adjust the point size
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {},
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Price',
            },
          },
        },
      },
    });

    return () => {
      priceChart.destroy();
      stockChart.destroy();
    };
  }, [priceData]);

  const handleViewToggle = () => {
    setIsWeeklyView(!isWeeklyView);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleViewToggle}
        className="py-2 px-4 rounded-lg m-auto text-white bg-[#7F56D9] hover:bg-[#5c3da7] focus:outline-none"
      >
        {isWeeklyView ? "Switch to Monthly View" : "Switch to Weekly View"}
      </button>
      <div className="price-trends w-full flex flex-col">
        <h3>Price Trends</h3>
        <canvas ref={priceChartRef} width={800} height={600} />
      </div>
      <div className="inventory-history w-full flex flex-col">
        <h3>Inventory History</h3>
        <canvas ref={stockChartRef} width={800} height={600} />
      </div>
    </div>
  );
};

export default PriceInventoryGraph;
