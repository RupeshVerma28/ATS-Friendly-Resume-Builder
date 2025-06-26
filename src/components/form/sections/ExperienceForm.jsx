import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddExperience = () => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          id: Date.now(),
          role: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const handleDeleteExperience = (id) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.filter((exp) => exp.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Experience</h3>
      {resumeData.experience.map((exp, index) => (
        <div key={exp.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="role"
              placeholder="Role (e.g., Software Engineer)"
              value={exp.role}
              onChange={(e) => handleChange(e, exp.id)}
              className="input-field"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => handleChange(e, exp.id)}
              className="input-field"
            />
            <input
              type="text"
              name="location"
              placeholder="Location (e.g., San Francisco, CA)"
              value={exp.location}
              onChange={(e) => handleChange(e, exp.id)}
              className="input-field"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                name="startDate"
                placeholder="Start Date (e.g., Jan 2022)"
                value={exp.startDate}
                onChange={(e) => handleChange(e, exp.id)}
                className="input-field"
              />
              <input
                type="text"
                name="endDate"
                placeholder="End Date (e.g., Present)"
                value={exp.endDate}
                onChange={(e) => handleChange(e, exp.id)}
                className="input-field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description (use bullet points, one per line)"
              value={exp.description}
              onChange={(e) => handleChange(e, exp.id)}
              className="input-field md:col-span-2"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteExperience(exp.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddExperience}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={20} />
        <span>Add Experience</span>
      </button>
    </div>
  );
};

export default ExperienceForm; 