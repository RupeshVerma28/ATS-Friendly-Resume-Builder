import React, { useRef } from 'react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';
import Controls from './components/Controls';

function App() {
  const resumePreviewRef = useRef();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-2 sm:p-4">
        <Controls componentRef={resumePreviewRef} />
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <ResumeForm />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="inline-block">
                <ResumePreview ref={resumePreviewRef} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
