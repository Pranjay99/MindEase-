import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AnalysisPage = () => {
  // Sample data for testing
  const data = [
    { date: '2024-11-01', depression: 20, anxiety: 30, stress: 40 },
    { date: '2024-11-08', depression: 15, anxiety: 25, stress: 35 },
    { date: '2024-11-15', depression: 10, anxiety: 20, stress: 30 },
    { date: '2024-11-20', depression: 25, anxiety: 35, stress: 45 },
    { date: '2024-11-22', depression: 20, anxiety: 20, stress: 32 },
    { date: '2024-11-25', depression: 16, anxiety: 11, stress: 21 },
    { date: '2024-11-28', depression: 25, anxiety: 28, stress: 37 },

  ];

  // Extract data for charts
  const labels = data.map((entry) => entry.date);
  const depressionScores = data.map((entry) => entry.depression);
  const anxietyScores = data.map((entry) => entry.anxiety);
  const stressScores = data.map((entry) => entry.stress);

  // Line Chart Data
  const createLineChartData = (label, data, color) => ({
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: `${color}33`, // Add transparency
        tension: 0.4,
        fill: true,
      },
    ],
  });

  // Combined Line Chart Data
  const combinedLineChartData = {
    labels,
    datasets: [
      {
        label: 'Depression',
        data: depressionScores,
        borderColor: '#4c51bf',
        backgroundColor: 'rgba(76, 81, 191, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Anxiety',
        data: anxietyScores,
        borderColor: '#48bb78',
        backgroundColor: 'rgba(72, 187, 120, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Stress',
        data: stressScores,
        borderColor: '#f56565',
        backgroundColor: 'rgba(245, 101, 101, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Bar Chart Data
  const createBarChartData = (label, data, color) => ({
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: color,
      },
    ],
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Mental Health Analysis</h1>

      {/* Separate Line Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Depression Over Time</h2>
          <Line data={createLineChartData('Depression', depressionScores, '#4c51bf')} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Anxiety Over Time</h2>
          <Line data={createLineChartData('Anxiety', anxietyScores, '#48bb78')} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Stress Over Time</h2>
          <Line data={createLineChartData('Stress', stressScores, '#f56565')} />
        </div>
      </div>

      {/* Combined Line Chart */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Combined Analysis</h2>
        <Line data={combinedLineChartData} />
      </div>

      {/* Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Depression Analysis</h2>
          <Bar data={createBarChartData('Depression', depressionScores, '#4c51bf')} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Anxiety Analysis</h2>
          <Bar data={createBarChartData('Anxiety', anxietyScores, '#48bb78')} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center mb-4">Stress Analysis</h2>
          <Bar data={createBarChartData('Stress', stressScores, '#f56565')} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
