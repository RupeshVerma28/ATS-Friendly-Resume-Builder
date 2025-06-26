import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

const CertificationPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { certifications = [] } = resumeData;

    if (!certifications.length) return null;

    return (
        <div className="mb-8">
            <h2 className="section-title">Certifications</h2>
            {certifications.map((cert) => (
                <div key={cert.id} className="mb-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-lg">{cert.name || 'Certification Name'}</h3>
                        <span className="text-sm font-mono">{cert.date}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <p className="italic">{cert.issuer || 'Issuer'}</p>
                    </div>
                    {cert.description && (
                        <p className="text-sm mt-1">{cert.description}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CertificationPreview; 