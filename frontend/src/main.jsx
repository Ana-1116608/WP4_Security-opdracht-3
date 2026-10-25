import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from "../components/Navbar";
import "../style/navbar.css";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
     await navigator.serviceWorker.register('/sw.js');
    } catch (e) {
      console.error('Service worker registration failed');
    }
  });
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Navbar/>
  </BrowserRouter>,
)
