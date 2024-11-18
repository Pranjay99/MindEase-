import { useNavigate } from 'react-router-dom';


const DoctorCarousel = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      expertise: 'Psychologist',
      image: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      expertise: 'Therapist',
      image: 'https://cdn-icons-png.flaticon.com/512/1021/1021566.png', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Dr. Emily White',
      expertise: 'Psychiatrist',
      image: 'https://cdn-icons-png.flaticon.com/512/9411/9411434.png', // Replace with actual image URL
    },
  ];

  return (
    <div className="w-full overflow-x-auto py-4">
      <h2 className="text-2xl font-bold mb-6">Meet Our Experts</h2>
      <div className="flex space-x-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{doctor.name}</h3>
            <p className="text-gray-500 text-center">{doctor.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCarousel;
