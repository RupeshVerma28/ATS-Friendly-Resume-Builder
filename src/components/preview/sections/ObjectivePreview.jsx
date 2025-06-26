import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const ObjectivePreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { objective } = resumeData;

    if (!objective) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Objective</h2>
            <p className="text-sm">{objective}</p>
        </div>
    );
};

export default ObjectivePreview; 