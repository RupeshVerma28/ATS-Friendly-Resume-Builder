import React, { createContext, useState, useEffect } from 'react';

export const ResumeContext = createContext();

const initialResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
  },
  objective: '',
  education: [],
  skills: {
    technical: [],
    soft: [],
    other: [],
  },
  experience: [],
  projects: [],
  certifications: [],
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem('resumeData');
    const data = savedData ? JSON.parse(savedData) : initialResumeData;
    if (!data.certifications) data.certifications = [];
    return data;
  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const certifications = resumeData.certifications || [];

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}; 