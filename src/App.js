import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import HomePage from './pages/HomePage';
import PlateformePage from './pages/Plateforme';
import RessourcesClimatPage from './pages/RessourcesClimat';
import ConseilPage from './pages/Conseil';
import RessourcesPage from './pages/Ressources';
import AProposPage from './pages/APropos';
import ContactPage from './pages/Contact';
import CarrieresPage from './pages/Carrieres';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plateforme" element={<PlateformePage />} />
          <Route path="/cas-usage/ressources" element={<RessourcesClimatPage />} />
          <Route path="/conseil" element={<ConseilPage />} />
          <Route path="/actualites" element={<RessourcesPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/carrieres" element={<CarrieresPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
