import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const EducationPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { education } = resumeData;

    if (education.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Education</h2>
            {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-lg">{edu.school || 'University Name'}</h3>
                        <span className="text-sm font-mono">{edu.startDate} - {edu.endDate || 'Present'}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="italic">{edu.degree || 'Degree'}</p>
                        <p className="italic">{edu.location || 'Location'}</p>
                    </div>
                    {edu.coursework && (
                        <p className="text-sm mt-1">
                            <span className="font-bold">Relevant Coursework:</span> {edu.coursework}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EducationPreview; 