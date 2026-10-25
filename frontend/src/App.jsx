import './App.css';

import { Card } from '../components/card';
import { Details } from '../components/details';
import { SavedCard } from '../components/saved_card';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/saved_card" element={<SavedCard />} />
      </Routes>
  </div>

  
);
}
export default App;
