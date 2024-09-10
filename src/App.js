import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './screens/Home';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndConditions from './screens/TermsAndConditions';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <Router>
      <div className="App  min-h-screen transition-all duration-300 mx-auto !contactGradCr">
      <ToastContainer />
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
