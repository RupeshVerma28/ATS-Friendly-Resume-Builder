import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const ExtraCurricularPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { extraCurricular } = resumeData;

    if (extraCurricular.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Extra-Curricular Activities</h2>
            <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                {extraCurricular.map((item) => (
                    item.description && <li key={item.id}>{item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExtraCurricularPreview; 