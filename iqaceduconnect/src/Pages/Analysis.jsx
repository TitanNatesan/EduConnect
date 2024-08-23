// import React, { useEffect, useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   ArcElement
// );

// const Analysis = () => {
//   const [chartData, setChartData] = useState({});
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     // Fetch data for analysis
//     axios
//       .get("http://127.0.0.1:8000/api/video-analysis/")
//       .then((response) => {
//         processChartData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching analysis data:", error);
//       });
//   }, [filter]);

//   const processChartData = (data) => {
//     // Process the fetched data and set it to state for chart rendering
//     // This is a simplified example; customize it based on your data structure

//     const labels = data.map((video) => video.title);
//     const times = data.map((video) => video.time_spent);

//     setChartData({
//       labels: labels,
//       datasets: [
//         {
//           label: "Time Spent on Videos (in minutes)",
//           data: times,
//           backgroundColor: "rgba(75, 192, 192, 0.6)",
//         },
//       ],
//     });
//   };

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div className="analysis-container p-8">
//       <h2 className="text-3xl font-bold mb-6">Video Time Analysis</h2>

//       {/* Filter Dropdown */}
//       <div className="mb-6">
//         <label htmlFor="filter" className="mr-4 font-semibold">
//           Filter By:
//         </label>
//         <select
//           id="filter"
//           value={filter}
//           onChange={handleFilterChange}
//           className="p-2 border border-gray-400 rounded-md"
//         >
//           <option value="all">All Videos</option>
//           <option value="top">Top Videos</option>
//           <option value="recent">Recent Videos</option>
//           <option value="user">By User</option>
//         </select>
//       </div>

//       {/* Bar Chart */}
//       <div className="chart-container mb-10">
//         <h3 className="text-xl font-semibold mb-4">
//           Time Spent on Videos (Bar Chart)
//         </h3>
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: { position: "top" },
//               title: { display: true, text: "Time Spent on Videos" },
//             },
//           }}
//         />
//       </div>

//       {/* Line Chart */}
//       <div className="chart-container mb-10">
//         <h3 className="text-xl font-semibold mb-4">
//           Time Spent on Videos (Line Chart)
//         </h3>
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: { position: "top" },
//               title: { display: true, text: "Time Spent on Videos Over Time" },
//             },
//           }}
//         />
//       </div>

//       {/* Pie Chart */}
//       <div className="chart-container mb-10">
//         <h3 className="text-xl font-semibold mb-4">
//           Video Distribution (Pie Chart)
//         </h3>
//         <Pie
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: { position: "top" },
//               title: { display: true, text: "Video Time Distribution" },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Analysis;
