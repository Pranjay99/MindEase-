import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const DoctorDetails = () => {
  //const  id  = 1; // Fetch the doctor ID from the route
  const navigate = useNavigate();
  const [consultationType, setConsultationType] = useState('online');
  const [selectedTime, setSelectedTime] = useState('');

  const doctor = {
    name: 'Dr. Jane Smith',
    photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
    location: 'New York, USA',
    expertise: ['Psychology', 'Stress Management'],
    timings: ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM'],
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert('Please select a time slot!');
      return;
    }
    alert(
      `Booking confirmed for ${consultationType} consultation with ${doctor.name} at ${selectedTime}`
    );
    navigate('/'); // Redirect to the home or confirmation page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 underline mb-4"
      >
        Back to List
      </button>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-48 h-48 rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-gray-500 mb-4">{doctor.location}</p>
          <h3 className="text-lg font-semibold mb-2">Fields of Expertise:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {doctor.expertise.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Consultation Type:</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => setConsultationType('online')}
            className={`px-4 py-2 rounded-md ${
              consultationType === 'online'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Online
          </button>
          <button
            onClick={() => setConsultationType('in-person')}
            className={`px-4 py-2 rounded-md ${
              consultationType === 'in-person'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            In-Person
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Available Timings:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {doctor.timings.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-md ${
                selectedTime === time
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
