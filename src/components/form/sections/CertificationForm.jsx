import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const CertificationForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddCertification = () => {
    setResumeData((prevData) => ({
      ...prevData,
      certifications: [
        ...prevData.certifications,
        {
          id: Date.now(),
          name: '',
          issuer: '',
          date: '',
          description: '',
        },
      ],
    }));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      certifications: prevData.certifications.map((cert) =>
        cert.id === id ? { ...cert, [name]: value } : cert
      ),
    }));
  };

  const handleDeleteCertification = (id) => {
    setResumeData((prevData) => ({
      ...prevData,
      certifications: prevData.certifications.filter((cert) => cert.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Certifications</h3>
      {resumeData.certifications && resumeData.certifications.map((cert) => (
        <div key={cert.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Certification Name"
              value={cert.name}
              onChange={(e) => handleChange(e, cert.id)}
              className="input-field"
            />
            <input
              type="text"
              name="issuer"
              placeholder="Issuer"
              value={cert.issuer}
              onChange={(e) => handleChange(e, cert.id)}
              className="input-field"
            />
            <input
              type="text"
              name="date"
              placeholder="Date (e.g., Jun 2024)"
              value={cert.date}
              onChange={(e) => handleChange(e, cert.id)}
              className="input-field"
            />
            <textarea
              name="description"
              placeholder="Description (optional)"
              value={cert.description}
              onChange={(e) => handleChange(e, cert.id)}
              className="input-field md:col-span-2"
              rows="2"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteCertification(cert.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddCertification}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={20} />
        <span>Add Certification</span>
      </button>
    </div>
  );
};

export default CertificationForm; 