import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Link } from 'react-feather';

const ProjectsPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { projects } = resumeData;

    if (projects.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Projects</h2>
            {projects.map((proj) => (
                <div key={proj.id} className="mb-4">
                    <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg">{proj.title || 'Project Title'}</h3>
                        {proj.link && (
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                <Link size={16} />
                            </a>
                        )}
                    </div>
                    {proj.tech && <p className="text-sm italic my-1">({proj.tech})</p>}
                    {proj.description && (
                        <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                            {proj.description.split('\n').map((bullet, i) => (
                                bullet && <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectsPreview; 