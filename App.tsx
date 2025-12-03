import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './views/LandingPage';
import { Dashboard } from './views/Dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
      <Navbar 
        onNavigate={(page) => setCurrentPage(page)} 
        currentPage={currentPage}
      />
      
      <main>
        {currentPage === 'landing' ? (
          <>
            <LandingPage />
            <Footer />
          </>
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  );
};

export default App;