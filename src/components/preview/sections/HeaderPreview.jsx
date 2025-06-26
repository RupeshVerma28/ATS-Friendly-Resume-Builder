import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'react-feather';

const HeaderPreview = () => {
    const { resumeData } = useContext(ResumeContext);
    const { firstName, lastName, email, phone, location, linkedin, website } = resumeData.personalInfo;

    return (
        <div className="text-center mb-8">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-wider uppercase text-gray-900 mb-1">{firstName || 'Firstname'} {lastName || 'Lastname'}</h1>
                <div className="w-16 h-1 bg-gray-800 rounded-full mb-2"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-700 mb-1">
                {email && <span className="flex items-center gap-1"><Mail size={14} />{email}</span>}
                {phone && <span className="flex items-center gap-1"><Phone size={14} />{phone}</span>}
                {location && <span className="flex items-center gap-1"><MapPin size={14} />{location}</span>}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-blue-700">
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><Linkedin size={14} />LinkedIn</a>}
                {website && <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><Globe size={14} />Website</a>}
            </div>
        </div>
    );
};

export default HeaderPreview; 