// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import FicheLogementPage from './pages/FicheLogementPage';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/logement/:id" element={<FicheLogementPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
