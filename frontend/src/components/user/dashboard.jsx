import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handlePredictionChoice = (type) => {
    navigate(`/predict/${type}`);
  };

  const userHistory = [
    { date: '2024-11-15', type: 'Depression', result: 'Moderate' },
    { date: '2024-11-10', type: 'Anxiety', result: 'Low' },
    { date: '2024-11-05', type: 'Stress', result: 'High' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Welcome to Your Dashboard</h1>

      {/* Prediction Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Stress Card */}
        <div
          onClick={() => handlePredictionChoice('stress')}
          className="bg-red-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Stress</h2>
          <p className="text-lg">Assess and manage your stress levels.</p>
        </div>

        {/* Depression Card */}
        <div
          onClick={() => handlePredictionChoice('depression')}
          className="bg-blue-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Depression</h2>
          <p className="text-lg">Identify signs of depression and get help.</p>
        </div>

        {/* Anxiety Card */}
        <div
          onClick={() => handlePredictionChoice('anxiety')}
          className="bg-green-500 text-white p-8 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-3xl font-bold mb-4">Anxiety</h2>
          <p className="text-lg">Understand and alleviate anxiety symptoms.</p>
        </div>
      </div>

      {/* User History */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your History</h2>
        {userHistory.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Prediction Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {userHistory.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.result}</td>
                </tr>
              ))}
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
