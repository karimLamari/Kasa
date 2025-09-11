import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './app.scss';
import Home from './pages/Home.jsx';
import Apropos from './pages/Apropos.jsx';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<Apropos/>} />
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
