import Dashboard from "./components/user/dashboard"
import Login from "./components/user/Login";
import NavigationBar from "./components/user/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/user/Signup";


function App() {

  return (
    <Router>
      <NavigationBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
     
  )
}

export default App
