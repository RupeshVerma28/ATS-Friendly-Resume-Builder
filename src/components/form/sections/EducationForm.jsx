import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const EducationForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          id: Date.now(),
          school: '',
          degree: '',
          location: '',
          startDate: '',
          endDate: '',
          coursework: '',
        },
      ],
    }));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      ),
    }));
  };

  const handleDeleteEducation = (id) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((edu) => edu.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Education</h3>
      {resumeData.education.map((edu, index) => (
        <div key={edu.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="school"
              placeholder="School/University"
              value={edu.school}
              onChange={(e) => handleChange(e, edu.id)}
              className="input-field"
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree (e.g., Master of Science)"
              value={edu.degree}
              onChange={(e) => handleChange(e, edu.id)}
              className="input-field"
            />
            <input
              type="text"
              name="location"
              placeholder="Location (e.g., Stanford, CA)"
              value={edu.location}
              onChange={(e) => handleChange(e, edu.id)}
              className="input-field"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                name="startDate"
                placeholder="Start Date (e.g., Sep 2018)"
                value={edu.startDate}
                onChange={(e) => handleChange(e, edu.id)}
                className="input-field"
              />
              <input
                type="text"
                name="endDate"
                placeholder="End Date (e.g., Jun 2020)"
                value={edu.endDate}
                onChange={(e) => handleChange(e, edu.id)}
                className="input-field"
              />
            </div>
            <textarea
              name="coursework"
              placeholder="Relevant Coursework (comma-separated)"
              value={edu.coursework}
              onChange={(e) => handleChange(e, edu.id)}
              className="input-field md:col-span-2"
              rows="3"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteEducation(edu.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddEducation}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={20} />
        <span>Add Education</span>
      </button>
    </div>
  );
};

export default EducationForm; 