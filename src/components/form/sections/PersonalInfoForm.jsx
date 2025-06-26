import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={resumeData.personalInfo.firstName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={resumeData.personalInfo.lastName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={resumeData.personalInfo.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={resumeData.personalInfo.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location (e.g., San Francisco, CA)"
          value={resumeData.personalInfo.location}
          onChange={handleChange}
          className="input-field md:col-span-2"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={resumeData.personalInfo.linkedin}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="url"
          name="website"
          placeholder="Portfolio/Website URL"
          value={resumeData.personalInfo.website}
          onChange={handleChange}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm; 