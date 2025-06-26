import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const ProjectsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddProject = () => {
    setResumeData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        {
          id: Date.now(),
          title: '',
          tech: '',
          link: '',
          description: '',
        },
      ],
    }));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      projects: prevData.projects.map((proj) =>
        proj.id === id ? { ...proj, [name]: value } : proj
      ),
    }));
  };

  const handleDeleteProject = (id) => {
    setResumeData((prevData) => ({
      ...prevData,
      projects: prevData.projects.filter((proj) => proj.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Projects</h3>
      {resumeData.projects.map((proj) => (
        <div key={proj.id} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={proj.title}
              onChange={(e) => handleChange(e, proj.id)}
              className="input-field"
            />
            <input
              type="text"
              name="tech"
              placeholder="Technologies Used (e.g., React, Node.js)"
              value={proj.tech}
              onChange={(e) => handleChange(e, proj.id)}
              className="input-field"
            />
            <input
              type="url"
              name="link"
              placeholder="Project Link"
              value={proj.link}
              onChange={(e) => handleChange(e, proj.id)}
              className="input-field md:col-span-2"
            />
            <textarea
              name="description"
              placeholder="Description (use bullet points, one per line)"
              value={proj.description}
              onChange={(e) => handleChange(e, proj.id)}
              className="input-field md:col-span-2"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={() => handleDeleteProject(proj.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddProject}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={20} />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectsForm; 