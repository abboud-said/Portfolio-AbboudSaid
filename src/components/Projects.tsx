import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Personal Portfolio Website',
            description: 'A responsive portfolio website to showcase my projects and skills.',
            technologies: ['React', 'TypeScript', 'CSS'],
        },
        {
            title: 'E-commerce Application',
            description: 'An online store application with user authentication and payment integration.',
            technologies: ['Node.js', 'Express', 'MongoDB'],
        },
        {
            title: 'Weather App',
            description: 'A web application that provides weather forecasts using a third-party API.',
            technologies: ['React', 'API', 'CSS'],
        },
        {
            title: 'Task Management Tool',
            description: 'A tool for managing tasks and projects with a user-friendly interface.',
            technologies: ['Angular', 'TypeScript', 'Firebase'],
        },
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Technologies Used:</strong> {project.technologies.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;