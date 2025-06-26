import React, { forwardRef } from 'react';
import HeaderPreview from './preview/sections/HeaderPreview';
import ObjectivePreview from './preview/sections/ObjectivePreview';
import EducationPreview from './preview/sections/EducationPreview';
import SkillsPreview from './preview/sections/SkillsPreview';
import ExperiencePreview from './preview/sections/ExperiencePreview';
import ProjectsPreview from './preview/sections/ProjectsPreview';
import CertificationPreview from './preview/sections/CertificationPreview';

const ResumePreview = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="resume-preview bg-white text-gray-900 shadow-2xl rounded-lg mx-auto"
      style={{
        width: '794px', // A4 width at 96dpi
        height: '1123px', // A4 height at 96dpi
        minWidth: '794px',
        minHeight: '1123px',
        margin: '0 auto',
        padding: '48px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <HeaderPreview />
      <hr className="my-4 border-gray-300" />
      <ObjectivePreview />
      <hr className="my-4 border-gray-300" />
      <EducationPreview />
      <hr className="my-4 border-gray-300" />
      <SkillsPreview />
      <hr className="my-4 border-gray-300" />
      <ExperiencePreview />
      <hr className="my-4 border-gray-300" />
      <ProjectsPreview />
      <hr className="my-4 border-gray-300" />
      <CertificationPreview />
      {/* Other preview sections will be added here */}
    </div>
  );
});

export default ResumePreview;