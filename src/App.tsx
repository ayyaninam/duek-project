import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import GoogleSVG from "./assets/images/icons/google.svg"
import RegisterBG from "./assets/images/register__bg.jpg"
import AmericaFlag from "./assets/images/america.png"
import Ellipsis from "./assets/images/icons/ellipsis.svg"
import UbuntuImage from "./assets/images/ubuntu.png"

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateDroplet from './pages/CreateDroplet';
import cpu_data from './data/cpu_data.json'
import AllDroplets from './pages/AllDroplets';
import Billing from './pages/Billing';
import Networking from './pages/Networking';

function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path="/register" element={<Register GoogleSVG={GoogleSVG} RegisterBG={RegisterBG} Link={Link} />} />
          <Route path="/login" element={<Login GoogleSVG={GoogleSVG} RegisterBG={RegisterBG} Link={Link} />} />
          <Route path="/dashboard" element={<Dashboard Ellipsis={Ellipsis} Link={Link} />} />
          <Route path="/create-droplet" element={<CreateDroplet cpu_data={cpu_data} UbuntuImage={UbuntuImage} Link={Link} AmericaFlag={AmericaFlag} />} />
          <Route path="/all-droplets" element={<AllDroplets Link={Link} Ellipsis={Ellipsis} />} />
          <Route path="/billing" element={<Billing Link={Link} />} />
          <Route path="/networking" element={<Networking Link={Link} />} />

          <Route
            path="*"
            element={<Navigate to="/register" replace />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
