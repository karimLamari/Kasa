// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import FicheLogement from './components/FicheLogement/FicheLogement';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/a-propos" element={<Layout><Apropos /></Layout>} />
        <Route path="/logement/:id" element={<Layout><FicheLogement /></Layout>} />
        <Route path="*" element={<Layout><Notfound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
