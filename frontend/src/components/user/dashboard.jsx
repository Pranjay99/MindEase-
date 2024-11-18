import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorCarousel from './Doctorscroll'; // Import the carousel

const Dashboard = () => {
  const navigate = useNavigate();
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = '673867fbe15636c181009fe9';

  const handlePredictionChoice = (type) => {
    navigate(`/${type}`);
  };

  // Fetch user history from API
  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/predictions/${userId}`);
        setUserHistory(response.data); // Assuming API returns an array of user history
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user history:', err);
        setError('Failed to load user history. Please try again later.');
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserHistory();
    }
  }, [userId]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Welcome to Your Dashboard</h1>

      {/* Prediction Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          onClick={() => handlePredictionChoice('stress')}
          className="bg-red-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Stress</h2>
          <p className="text-lg">Assess and manage your stress levels.</p>
        </div>
        <div
          onClick={() => handlePredictionChoice('depression')}
          className="bg-blue-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Depression</h2>
          <p className="text-lg">Identify signs of depression and get help.</p>
        </div>
        <div
          onClick={() => handlePredictionChoice('anxiety')}
          className="bg-green-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Anxiety</h2>
          <p className="text-lg">Understand and alleviate anxiety symptoms.</p>
        </div>
      </div>

      {/* Doctor Carousel */}
      <DoctorCarousel />

      {/* User History */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your History</h2>
        {loading ? (
          <p className="text-gray-500">Loading history...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : userHistory.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Prediction Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
            {userHistory.map((entry, index) => {
              console.log(entry.created_at              );
  const formattedDate = new Date(entry.created_at).toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  return (
    <tr key={index} className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2">{formattedDate}</td>
      <td className="border border-gray-300 px-4 py-2">{entry.test_type}</td>
      <td className="border border-gray-300 px-4 py-2">{entry.result_type}</td>
    </tr>
  );
})}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No history available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
