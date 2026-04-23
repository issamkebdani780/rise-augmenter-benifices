import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './componenets/Hero';
import Verite from './componenets/verite';
import Benifices from './componenets/benifices';
import Dashboard from './componenets/dashboard';
import CasReal from './componenets/casreal';
import DecisionRapide from './componenets/decisionrapide';
import Integration from './componenets/integration';
import Temoignages from './componenets/temoingages';
import Tarifs from './componenets/tarifs';
import Faq from './componenets/faq';
import FormLead from './componenets/formlead';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { t, i18n } = useTranslation();

  // Set RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Verite />
              <Benifices />
              <Dashboard />
              <CasReal />
              <DecisionRapide />
              <Integration />
              <Temoignages />
              <Tarifs />
              <Faq />
              <FormLead />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
