import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Layout, Cpu } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: <Layout className="w-6 h-6" />,
            skills: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
        },
        {
            title: 'Backend',
            icon: <Server className="w-6 h-6" />,
            skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
        },
        {
            title: 'Database',
            icon: <Database className="w-6 h-6" />,
            skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Redis'],
        },
        {
            title: 'Tools',
            icon: <Cpu className="w-6 h-6" />,
            skills: ['Git', 'Docker', 'Postman', 'Vercel', 'AWS'],
        },
    ];

    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        I've spent years honing my craft across various technologies. Here's a glimpse into my toolbox.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass dark:glass-dark p-8 rounded-2xl hover:border-primary-light/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-light/10 text-primary-light flex items-center justify-center mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 dark:text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-dark text-sm dark:text-gray-400 border border-slate-200 dark:border-slate-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
