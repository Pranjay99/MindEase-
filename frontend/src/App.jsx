import Dashboard from "./components/user/dashboard"
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import NavigationBar from "./components/user/Navigation";
import DoctorList from "./components/user/Doctorlist";
import DoctorDetails from "./components/user/DoctorDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prediction from "./components/user/Depresult";
import Depression from "./components/user/Depression";
import { useState } from "react";
import DoctorDashboard from "./components/Doctor/Dashboard";
import TrackingPage from "./components/user/Explore";
import UserDetails from "./components/Doctor/userdetails";


function App() {
  const [result, setResult] = useState({});

  const handlePredictionResult = (depressionType, depressionScore) => {
    setResult({ depressionType, depressionScore });
  };

  return (
    <Router>
      <NavigationBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/explore" element={<TrackingPage />} />
      <Route path="/user-details/:id" element={<UserDetails />} />
      <Route path="/depression" element={<Depression onPrediction={handlePredictionResult}/>} />
      <Route
          path="/prediction" element={
            <Prediction
              depressionType={result.depressionType}
              depressionScore={result.depressionScore}
            />
          }
        />
      <Route path="/expert" element={<DoctorList />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />

    </Routes>
  </Router>
     
  )
}

export default App
