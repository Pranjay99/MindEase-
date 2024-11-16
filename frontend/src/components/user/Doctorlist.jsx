import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
      location: 'New York, USA',
      expertise: ['Psychology', 'Stress Management'],
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
      location: 'Los Angeles, USA',
      expertise: ['Therapy', 'Cognitive Behavioral Therapy'],
    },
    {
      id: 3,
      name: 'Dr. Emily White',
      photo: 'https://cdn-icons-png.flaticon.com/512/9411/9411434.png',
      location: 'Chicago, USA',
      expertise: ['Psychiatry', 'Mental Health'],
    },
    {
      id: 1,
      name: 'Dr. Jane Smith',
      photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
      location: 'New York, USA',
      expertise: ['Psychology', 'Stress Management'],
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      photo: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png',
      location: 'Los Angeles, USA',
      expertise: ['Therapy', 'Cognitive Behavioral Therapy'],
    },
    {
      id: 3,
      name: 'Dr. Emily White',
      photo: 'https://cdn-icons-png.flaticon.com/512/9411/9411434.png',
      location: 'Chicago, USA',
      expertise: ['Psychiatry', 'Mental Health'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Experts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">{doctor.name}</h2>
            <p className="text-gray-500 text-center">{doctor.location}</p>
            <h3 className="text-sm font-semibold mt-2">Expertise:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {doctor.expertise.map((field, index) => (
                <li key={index}>{field}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
