import React, { useContext, useRef, useState } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { X } from 'react-feather';

const skillCategories = [
  { key: 'technical', label: 'Technical Skills' },
  { key: 'soft', label: 'Soft Skills' },
  { key: 'other', label: 'Other Skills' },
];

const SkillsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [inputs, setInputs] = useState({ technical: '', soft: '', other: '' });
  const inputRefs = {
    technical: useRef(),
    soft: useRef(),
    other: useRef(),
  };

  const handleInputChange = (e, category) => {
    setInputs({ ...inputs, [category]: e.target.value });
  };

  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter' && inputs[category].trim() !== '') {
      e.preventDefault();
      addSkill(category, inputs[category].trim());
    } else if (e.key === 'Backspace' && inputs[category] === '') {
      // Remove last skill if input is empty and backspace is pressed
      removeSkill(category, resumeData.skills[category].length - 1);
    }
  };

  const addSkill = (category, skill) => {
    if (!skill) return;
    setResumeData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [category]: [...prevData.skills[category], skill],
      },
    }));
    setInputs((prev) => ({ ...prev, [category]: '' }));
  };

  const removeSkill = (category, idx) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [category]: prevData.skills[category].filter((_, i) => i !== idx),
      },
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Skills</h3>
      <div className="space-y-4">
        {skillCategories.map(({ key, label }) => (
          <div key={key}>
            <label className="block font-semibold mb-1">{label}</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {resumeData.skills[key].map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                >
                  {skill}
                  <button
                    type="button"
                    className="ml-1 text-blue-500 hover:text-red-500"
                    onClick={() => removeSkill(key, idx)}
                    tabIndex={-1}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            <input
              ref={inputRefs[key]}
              type="text"
              className="input-field w-full"
              placeholder={`Type a skill and press Enter (e.g., React JS)`}
              value={inputs[key]}
              onChange={(e) => handleInputChange(e, key)}
              onKeyDown={(e) => handleKeyDown(e, key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm; 