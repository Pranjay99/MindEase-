import  { useState } from 'react';

const DoctorDashboard = () => {
  // Sample patient data
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
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2024-11-21',
      time: '2:00 PM',
      details: {
        age: 25,
        gender: 'Female',
        contact: '987-654-3210',
        symptoms: 'Overwhelmed, frequent crying, and sadness',
        notes: 'Exhibits signs of depression, reports loss of interest.',
      },
    },
    {
      id: 3,
      name: 'Emily White',
      date: '2024-11-22',
      time: '4:00 PM',
      details: {
        age: 40,
        gender: 'Female',
        contact: '555-123-4567',
        symptoms: 'Irritability, nervousness, and tension',
        notes: 'Experiencing workplace stress and personal conflict.',
      },
    },
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleShowDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseDetails = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Doctor Dashboard</h1>

      {/* Patient List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Patient Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.date}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.time}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleShowDetails(patient)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
            <p>
              <strong>Name:</strong> {selectedPatient.name}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.details.age}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPatient.details.gender}
            </p>
            <p>
              <strong>Contact:</strong> {selectedPatient.details.contact}
            </p>
            <p>
              <strong>Symptoms:</strong> {selectedPatient.details.symptoms}
            </p>
            <p>
              <strong>Notes:</strong> {selectedPatient.details.notes}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={handleCloseDetails}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
