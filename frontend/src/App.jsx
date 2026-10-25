import "../style/navbar.css";
import './app.css';
import { Toaster } from "sonner";

import { Home } from '../views/Home';
import { Details } from '../views/details';
import { Router, Routes, Route } from 'react-router-dom';
import { SavedCard } from '../views/saved_card';

function App() {
  return (
    <>
    <Toaster />
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/saved_card" element={<SavedCard/>} />
      </Routes>
    </div>
    </>
  );
}
export default App;
