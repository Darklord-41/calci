import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import ManualEntry from './pages/ManualEntry';
import UploadFlow from './pages/UploadFlow';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manual" element={<ManualEntry />} />
          <Route path="/upload" element={<UploadFlow />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
