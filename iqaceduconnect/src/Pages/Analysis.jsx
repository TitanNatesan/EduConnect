import React, { useEffect, useState } from 'react';
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea
} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(...registerables);

const Analysis = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from your backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.137.1:8000/api/getRunTime/'); // Update this URL to your backend endpoint
        const data = await response.json();

        // Process the data
        const titles = data.map(item => item.description);
        const totalRuntime = data.map(item => item.total_runtime);

        setChartData({
          labels: titles,
          datasets: [
            {
              label: 'Total Runtime (hours)',
              data: totalRuntime,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <p className="text-center mt-10">Loading data...</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Video Viewing Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar data={chartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Line data={chartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Pie data={chartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Doughnut data={chartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Radar data={chartData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <PolarArea data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
