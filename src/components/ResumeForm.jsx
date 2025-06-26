import React from 'react';
import PersonalInfoForm from './form/sections/PersonalInfoForm';
import ObjectiveForm from './form/sections/ObjectiveForm';
import EducationForm from './form/sections/EducationForm';
import SkillsForm from './form/sections/SkillsForm';
import ExperienceForm from './form/sections/ExperienceForm';
import ProjectsForm from './form/sections/ProjectsForm';
import CertificationForm from './form/sections/CertificationForm';

const ResumeForm = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Edit Your Resume
      </h2>
      <div className="space-y-6">
        <PersonalInfoForm />
        <ObjectiveForm />
        <EducationForm />
        <SkillsForm />
        <ExperienceForm />
        <ProjectsForm />
        <CertificationForm />
      </div>
    </div>
  );
};

export default ResumeForm; 