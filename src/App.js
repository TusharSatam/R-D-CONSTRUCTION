import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './screens/Home';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndConditions from './screens/TermsAndConditions';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <Router>
      <div className="App max-w-[1200px] bg-[#FFFFFF] min-h-screen transition-all duration-300 mx-auto">
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
      </div>
    </Router>
  );
}

export default App;
