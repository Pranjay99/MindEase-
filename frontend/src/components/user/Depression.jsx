import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Depression = ({ onPrediction, userId }) => {
  const navigate = useNavigate();
  const questions = [
    "How often have you felt down, depressed, or hopeless?",
    "How often have you had little interest or pleasure in doing things?",
    "How often have you felt tired or had little energy?",
    "How often have you had trouble sleeping or slept too much?",
    "How often have you felt bad about yourself or that you are a failure?",
    "How often have you had difficulty concentrating on things like reading?",
    "How often have you moved or spoken so slowly that others noticed?",
    "How often have you felt restless or fidgety?",
    "How often have you thought you'd be better off dead or hurting yourself?",
    "How often have you had a poor appetite or overeaten?",
  ];

  const [ratings, setRatings] = useState(Array(questions.length).fill(1));

  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };

  const handlePrediction = async () => {
    const totalScore = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageScore = totalScore / questions.length;

    let depressionType;
    if (averageScore <= 2) {
      depressionType = "Low Risk of Depression";
    } else if (averageScore <= 4) {
      depressionType = "Moderate Risk of Depression";
    } else {
      depressionType = "High Risk of Depression";
    }

    const data = {
      userId : '673867fbe15636c181009fe9', // Replace with the actual user ID
      test_type: "Depression",
      result: totalScore ,
      result_type : depressionType ,
    };

    try {
      // Make the POST request to save the prediction
      await axios.post('http://localhost:3000/api/predictions', data);
      alert('Prediction saved successfully!');
    } catch (error) {
      console.error('Error saving prediction:', error);
      alert('Failed to save prediction. Please try again.');
    }

    onPrediction(depressionType, totalScore);
    navigate('/prediction');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Depression Assessment</h1>
      <p className="text-center text-gray-600 mb-6">
        Please answer the following questions and rate them on a scale of 1 (Never) to 5 (Always).
      </p>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <p className="text-lg font-semibold mb-2">{`${index + 1}. ${question}`}</p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleRatingChange(index, value)}
                  className={`px-4 py-2 rounded-md ${
                    ratings[index] === value
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handlePrediction}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Predict Depression Risk
        </button>
      </div>
    </div>
  );
};

export default Depression;
