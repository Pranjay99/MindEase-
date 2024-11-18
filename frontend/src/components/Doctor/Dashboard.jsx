import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  // Sample doctor data
  const doctor = {
    name: 'Dr. Jane Smith',
    photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
    location: 'New York, USA',
    expertise: ['Psychology', 'Stress Management'],
  };

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
        history: [
          { date: '2024-10-20', type: 'Depression', result: 'Moderate' },
          { date: '2024-10-15', type: 'Anxiety', result: 'Low' },
        ],
      },
    },
    // Add more patient data here
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Doctor Dashboard</h1>

      {/* Doctor Profile */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-gray-500">{doctor.location}</p>
            <h3 className="text-lg font-semibold mt-4">Specialist In:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {doctor.expertise.map((field, index) => (
                <li key={index}>{field}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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
                    onClick={() => navigate(`/user-details/${patient.id}`)}
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
    </div>
  );
};

export default DoctorDashboard;
