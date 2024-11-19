import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      date: '2024-11-20',
      time: '10:00 AM',
      details: {
        age: 30,
        gender: 'Male',
        contact: '123-456-7890',
        symptoms: 'Stress, fatigue, and low energy',
        notes: 'Reports trouble sleeping and mild anxiety.',
        history: [
          { date: '2024-10-20', type: 'Depression', result: 'Moderate' },
          { date: '2024-10-15', type: 'Anxiety', result: 'Low' },
        ],
      },
    },
    // Add more patient data here
  ];


  // Find the patient based on the ID
  const patient = patients.find((p) => p.id === parseInt(id));

  if (!patient) {
    return <div className="text-center text-red-500">Patient not found!</div>;
  }

  const handleDecision = (decision) => {
    alert(`You have ${decision} the appointment for ${patient.name}.`);
    navigate(-1); // Go back to the dashboard
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Patient Details</h1>

      {/* Patient Information */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{patient.name}</h2>
        <p>
          <strong>Age:</strong> {patient.details.age}
        </p>
        <p>
          <strong>Gender:</strong> {patient.details.gender}
        </p>
        <p>
          <strong>Contact:</strong> {patient.details.contact}
        </p>
        <p>
          <strong>Symptoms:</strong> {patient.details.symptoms}
        </p>
        <p>
          <strong>Notes:</strong> {patient.details.notes}
        </p>
      </div>

      {/* Past History */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Past History</h3>
        {patient.details.history.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Prediction Type</th>
                <th className="border border-gray-300 px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {patient.details.history.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No past history available.</p>
        )}
      </div>

      {/* Accept or Decline Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => handleDecision('accepted')}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Accept
        </button>
        <button
          onClick={() => handleDecision('declined')}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
