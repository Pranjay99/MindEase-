import Dashboard from "./components/user/dashboard"
import NavigationBar from "./components/user/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <NavigationBar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </Router>
     
  )
}

export default App
