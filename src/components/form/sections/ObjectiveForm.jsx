import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const ObjectiveForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData((prevData) => ({
      ...prevData,
      objective: e.target.value,
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Objective</h3>
      <textarea
        placeholder="A brief summary of your career objectives..."
        value={resumeData.objective}
        onChange={handleChange}
        className="input-field h-32"
        rows="4"
      />
    </div>
  );
};

export default ObjectiveForm; 