import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import English from './components/English';
import Amharic from './components/Amharic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/English" element={<English />} />
        <Route path="/Amharic" element={<Amharic />} />
      </Routes>
    </Router>
  );
}

export default App;
