import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const LeadershipPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { leadership } = resumeData;

    if (leadership.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Leadership</h2>
            <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                {leadership.map((item) => (
                    item.description && <li key={item.id}>{item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeadershipPreview; 