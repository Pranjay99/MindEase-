import { useNavigate } from 'react-router-dom';
const Prediction = ({ depressionType, depressionScore }) => {
    const navigate = useNavigate();


    const RePredictio = () => {
        navigate(`/depression`);
      };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Prediction Results</h1>
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Depression Risk</h2>
        <p className="text-lg font-medium mb-6">{`You have a ${depressionType}`}</p>
        <div className="relative w-full max-w-md mx-auto">
          {/* Score Meter */}
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className={`h-6 rounded-full ${
                depressionScore <= 10
                  ? 'bg-green-500'
                  : depressionScore <= 20
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${(depressionScore / 50) * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-700">{`Score: ${depressionScore} / 50`}</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => RePredictio()} // Reset and start again
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Take Another Assessment 
        </button>
      </div>
    </div>
  );
};

export default Prediction;
