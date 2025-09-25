// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import FicheLogement from './components/FicheLogement/FicheLogement';
import FicheLogementPage from './pages/FicheLogementPage';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<FicheLogementPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
