const exampleData = {
  personalInfo: {
    firstName: 'JANE',
    lastName: 'DOE',
    email: 'jane.doe@example.com',
    phone: '+1 (123) 456-7890',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/janedoe-example',
    website: 'janedoe.dev',
  },
  objective:
    'Innovative Software Engineer with 3+ years of experience in developing, testing, and deploying robust web applications. Seeking to leverage expertise in JavaScript, React, and cloud technologies to contribute to a challenging and dynamic team.',
  education: [
    {
      id: 1,
      school: 'Stanford University',
      degree: 'Master of Science, Computer Science',
      location: 'Stanford, CA',
      startDate: 'Sep 2018',
      endDate: 'Jun 2020',
      coursework: 'Machine Learning, Web Applications, Distributed Systems',
    },
    {
      id: 2,
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science, Electrical Engineering & Computer Sciences',
      location: 'Berkeley, CA',
      startDate: 'Aug 2014',
      endDate: 'May 2018',
      coursework: 'Data Structures, Algorithms, Computer Architecture',
    },
  ],
  skills: {
    technical: ['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'Go', 'SQL', 'NoSQL', 'Docker', 'AWS'],
    soft: ['Agile Methodologies', 'Team Collaboration', 'Problem Solving', 'Communication'],
    other: ['CI/CD', 'Git', 'JIRA'],
  },
  experience: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Palo Alto, CA',
      startDate: 'Jul 2020',
      endDate: 'Present',
      description:
        'Developed and maintained scalable microservices using Node.js and Go.\nLed the migration of a legacy system to a modern React-based frontend, improving performance by 40%.\nCollaborated with cross-functional teams to define, design, and ship new features.',
    },
    {
      id: 2,
      role: 'Software Engineer Intern',
      company: 'Innovate LLC',
      location: 'San Francisco, CA',
      startDate: 'May 2019',
      endDate: 'Aug 2019',
      description:
        'Assisted in the development of a new customer-facing web application using React and Redux.\nImplemented unit and integration tests, increasing code coverage by 25%.\nWrote and maintained technical documentation for new features.',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Hiring Search Tool',
      tech: 'React, NodeJS, Firebase',
      link: 'https://example.com/hiring-tool',
      description:
        'Built a tool to search for Hiring Managers and Recruiters using ReactJS, NodeJS, Firebase and boolean queries.\nOver 25000 people have used it so far, with 5000+ queries being saved and shared, and search results even better than LinkedIn!',
    },
    {
        id: 2,
        title: 'Short Project Title',
        tech: 'React, A, B, C',
        link: 'https://example.com/short-project',
        description:
          'Build a project that does something and had quantified success using A, B, and C.\nThis project\'s description spans two lines and also won an award.',
      },
  ],
  extraCurricular: [
    {
      id: 1,
      description: 'Actively write blog posts and social media posts (TikTok, Instagram) viewed by over 20K+ job seekers per week to help people with best practices to land their dream jobs.',
    },
    {
        id: 2,
        description: 'Sample bullet point.',
    }
  ],
  leadership: [
    {
      id: 1,
      description: 'Admin for the FAANGPath Discord community with over 6000+ job seekers and industry mentors.',
    },
  ],
};

export default exampleData; 