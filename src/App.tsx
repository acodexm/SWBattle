import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { PeopleBattle } from './routes/PeopleBattle';
import { StarshipsBattle } from './routes/StarshipsBattle';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeopleBattle />} />
        <Route path="/starships" element={<StarshipsBattle />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
