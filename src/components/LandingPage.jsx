import React from 'react';
import { Mail, Linkedin, Youtube, Instagram } from 'react-feather';

const LandingPage = ({ onStartCreating }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/favicon.png" alt="ScanReady CV Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-gray-800">ScanReady CV</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <button 
              onClick={onStartCreating}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1 text-center md:text-left mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Professional
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ATS-Friendly</span>
              <br />Resumes in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Build stunning, ATS-optimized resumes that get you noticed by recruiters. 
              Our intelligent builder ensures your resume passes through Applicant Tracking Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onStartCreating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Creating Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Resume Builder?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional tools designed to pass ATS systems and impress hiring managers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ATS Optimized</h3>
            <p className="text-gray-600">
              Our builder is designed to pass through Applicant Tracking Systems, ensuring your resume reaches human eyes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Design</h3>
            <p className="text-gray-600">
              Clean, modern layouts that suit your industry and experience level.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick & Easy</h3>
            <p className="text-gray-600">
              Build your resume in minutes with our intuitive interface. No design skills required.
            </p>
          </div>
        </div>
        {/* Features Images Grid Removed */}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Hiring Chances</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Real-Time Resume Preview</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-blue-100">Design Skills Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs with our resume builder.
          </p>
          <button 
            onClick={onStartCreating}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Create Your Resume Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/favicon.png" alt="ScanReady CV Logo" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold">ScanReady CV</span>
              </div>
              <p className="text-gray-400">
                Create professional, ATS-optimized resumes that help you stand out in the job market.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ATS Optimization</li>
                <li>Professional Design</li>
                <li>Easy Customization</li>
                <li>Export Options</li>
              </ul>
            </div>
            {/* Removed Support section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-gray-400" />
                  <a href="mailto:errupesh28@gmail.com" className="hover:underline">Email</a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={18} className="text-gray-400" />
                  <a href="https://linkedin.com/in/rupeshverma28" target="_blank" rel="noopener noreferrer" className="hover:underline">Rupesh Verma</a>
                </li>
                <li className="flex items-center gap-2">
                  <Youtube size={18} className="text-gray-400" />
                  <a href="https://youtube.com/@techtruth4u?si=70cAUdl7T_-hirqr" target="_blank" rel="noopener noreferrer" className="hover:underline">Tech Truth</a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram size={18} className="text-gray-400" />
                  <a href="https://www.instagram.com/code_4_funn?igsh=ZGptODNicG9yc3Fl" target="_blank" rel="noopener noreferrer" className="hover:underline">Code 4 Funn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>All rights reserved to Rupesh Verma</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 