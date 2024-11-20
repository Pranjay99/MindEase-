import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDetails = () => {
  const navigate = useNavigate();
  const [consultationType, setConsultationType] = useState('online');
  const [selectedTime, setSelectedTime] = useState('');
  const [userNote, setUserNote] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const doctor = {
    name: 'Dr. C V Ramesh',
    photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
    location: 'Vellore, India',
    expertise: ['Psychology', 'Stress Management'],
    timings: ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM'],
    feedback: [
      { name: 'John Doe', comment: 'Great experience, very professional!', rating: 5 },
      { name: 'Emily White', comment: 'Helped me a lot with stress management.', rating: 4 },
    ],
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert('Please select a time slot!');
      return;
    }
    setIsBooked(true); // Update booking status
    alert(
      `Booking confirmed for ${consultationType} consultation with ${doctor.name} at ${selectedTime}`
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 underline mb-4"
      >
        Back to List
      </button>

      {/* Doctor Details */}
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

      {/* Consultation Type */}
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

      {/* Available Timings */}
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

      {/* User Note */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Add a Note:</h3>
        <textarea
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Add any specific details or requirements for the doctor..."
        />
      </div>

      {/* Booking Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleBooking}
          className={`px-6 py-3 rounded-lg shadow-lg transition ${
            isBooked
              ? 'bg-green-500 text-white cursor-default'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={isBooked}
        >
          {isBooked ? 'Booking Done' : 'Book Appointment'}
        </button>
      </div>

      {/* Feedback Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Doctor Feedback:</h3>
        <div className="space-y-4">
          {doctor.feedback.map((fb, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="font-bold">{fb.name}</p>
              <p className="text-gray-600">{fb.comment}</p>
              <p className="text-yellow-500">Rating: {'⭐'.repeat(fb.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
