import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import HomePage from './Pages/HomePage';
import JobListingsPage from './Pages/JobListingsPage';
import JobDetailPage from './Pages/JobDetailPage';
import EmployerDashboard from './Pages/EmployerDashboard';
import CandidateDashboard from './Pages/CandidateDashboard';
import Footer from './Components/Footer';
import About from './Components/About';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import ApplicationPage from './Pages/ApplicationPage';
function App() {


  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse-jobs" element={<JobListingsPage />} />
        <Route path="/browse-jobs/:id" element={<JobDetailPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply/:id" element={<ApplicationPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
