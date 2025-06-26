import React from 'react';
import { Mail, Linkedin, Youtube, Instagram } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center flex flex-col items-center gap-2">
      <p className="mb-2">All rights reserved to Rupesh Verma</p>
      <div className="flex justify-center gap-4 mb-2">
        <a href="mailto:errupesh28@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <Mail size={22} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/rupeshverma28" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={22} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://youtube.com/@techtruth4u?si=70cAUdl7T_-hirqr" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube size={22} className="hover:text-red-400 transition-colors" />
        </a>
        <a href="https://www.instagram.com/code_4_funn?igsh=ZGptODNicG9yc3Fl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={22} className="hover:text-pink-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 