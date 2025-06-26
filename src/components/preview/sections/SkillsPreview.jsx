import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const SkillsPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { skills } = resumeData;

    const hasSkills = skills.technical.length > 0 || skills.soft.length > 0 || skills.other.length > 0;

    if (!hasSkills) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Skills</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
                {skills.technical.length > 0 && (
                    <div>
                        <h3 className="font-bold">Technical</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {skills.technical.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {skills.soft.length > 0 && (
                    <div>
                        <h3 className="font-bold">Soft Skills</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {skills.soft.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {skills.other.length > 0 && (
                    <div>
                        <h3 className="font-bold">Other</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {skills.other.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsPreview; 