import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import { MembershipPlans } from './components/MembershipPlans';
import { AppDownload } from './components/AppDownload';
import { Shop } from './components/Shop';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminPage } from './pages/AdminPage';
import { ActivitiesPage } from './pages/ActivitiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Activities />
              <MembershipPlans />
              <AppDownload />
              <Shop />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;