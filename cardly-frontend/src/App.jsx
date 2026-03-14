import { Routes, Route } from 'react-router-dom';
import Builder from './pages/Builder';
import PublicCard from './pages/PublicCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Builder />} />
      <Route path="/:username" element={<PublicCard />} />
    </Routes>
  );
}

export default App;