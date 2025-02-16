import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'React', level: 'Expert' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'CSS', level: 'Expert' },
        { name: 'HTML', level: 'Expert' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'Java', level: 'Beginner' },
    ];

    return (
        <section>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        {skill.name} - {skill.level}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;