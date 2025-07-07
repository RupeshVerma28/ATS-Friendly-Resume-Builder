import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'builder'

  const handleStartCreating = () => {
    setCurrentView('builder');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <>
      {currentView === 'landing' ? (
        <LandingPage onStartCreating={handleStartCreating} />
      ) : (
        <ResumeBuilder onBackToLanding={handleBackToLanding} />
      )}
    </>
  );
}

export default App;
