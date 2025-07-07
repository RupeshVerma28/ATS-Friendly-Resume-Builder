import React, { useRef } from 'react';
import Header from './Header';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import Footer from './Footer';
import Controls from './Controls';

const ResumeBuilder = ({ onBackToLanding }) => {
  const resumePreviewRef = useRef();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-2 sm:p-4">
        <div className="mb-4">
          <button 
            onClick={onBackToLanding}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
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
};

export default ResumeBuilder; 