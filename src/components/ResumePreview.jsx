import React, { forwardRef, useEffect, useRef, useState } from 'react';
import HeaderPreview from './preview/sections/HeaderPreview';
import ObjectivePreview from './preview/sections/ObjectivePreview';
import EducationPreview from './preview/sections/EducationPreview';
import SkillsPreview from './preview/sections/SkillsPreview';
import ExperiencePreview from './preview/sections/ExperiencePreview';
import ProjectsPreview from './preview/sections/ProjectsPreview';
import CertificationPreview from './preview/sections/CertificationPreview';

const A4_WIDTH = 794; // px
const A4_HEIGHT = 1123; // px

const ResumePreview = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newScale = Math.min(1, containerWidth / A4_WIDTH);
        setScale(newScale);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-start overflow-x-hidden">
      <div
        ref={ref}
        className="resume-preview bg-white text-gray-900 shadow-2xl rounded-lg"
        style={{
          width: `${A4_WIDTH}px`,
          height: `${A4_HEIGHT}px`,
          margin: '0 auto',
          padding: '48px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          background: '#fff',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          transition: 'transform 0.2s',
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
      </div>
    </div>
  );
});

export default ResumePreview;