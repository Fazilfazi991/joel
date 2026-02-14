import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Automation from './pages/Automation';
import ZohoLanding from './pages/ZohoLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/crm" element={<ZohoLanding />} />
        <Route path="/zoho-landing" element={<ZohoLanding />} />
        {/* Add cleanup/redirects for hash links if needed */}
      </Routes>
    </Router>
  );
}

export default App;
