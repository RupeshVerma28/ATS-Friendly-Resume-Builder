import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const ExperiencePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { experience } = resumeData;

    if (experience.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Experience</h2>
            {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-lg">{exp.role || 'Role'}</h3>
                        <span className="text-sm font-mono">{exp.startDate} - {exp.endDate || 'Present'}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="italic">{exp.company || 'Company Name'}</p>
                        <p className="italic">{exp.location || 'Location'}</p>
                    </div>
                    {exp.description && (
                        <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                            {exp.description.split('\n').map((bullet, i) => (
                                bullet && <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExperiencePreview; 