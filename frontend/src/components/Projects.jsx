import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'E-Commerce Platform',
            desc: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
            longDesc: 'Built a comprehensive e-commerce platform featuring user authentication, product categorization, shopping cart functionality, and integrated payment gateways. Focused on performance optimization and responsive design.',
            tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
            link: '#',
            github: 'https://github.com/Rizwan-Zeeshan',
            image: '🛒',
        },
        {
            title: 'Task Management System',
            desc: 'Collaborative task tracking app with real-time updates.',
            longDesc: 'Developed a real-time task management tool allowing teams to create, assign, and track projects. Implemented WebSocket for live updates and used specialized UI components for a smooth user experience.',
            tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
            link: '#',
            github: 'https://github.com/Rizwan-Zeeshan',
            image: '📋',
        },
        {
            title: 'Fitness Tracker App',
            desc: 'Mobile-responsive web app for tracking workouts and nutrition.',
            longDesc: 'Created a fitness tracking application with personalized workout plans, calorie tracking, and progress visualization using Chart.js. Integrated with health APIs for data synchronization.',
            tech: ['React', 'Vite', 'Tailwind', 'Chart.js'],
            link: '#',
            github: 'https://github.com/Rizwan-Zeeshan',
            image: '💪',
        },
    ];

    return (
        <section id="projects" className="section-padding bg-slate-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        A selection of my recent work, showcasing my skills in full-stack development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            layoutId={`project-${idx}`}
                            onClick={() => setSelectedProject({ ...project, id: idx })}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer bg-white dark:bg-dark-lighter rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                                {project.image}
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-primary-light">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-primary-light transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                className="relative bg-white dark:bg-dark-lighter w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl z-10"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors z-20"
                                >
                                    <X className="w-5 h-5 dark:text-white" />
                                </button>
                                <div className="h-64 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 flex items-center justify-center text-8xl">
                                    {selectedProject.image}
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold mb-4 dark:text-white">{selectedProject.title}</h3>
                                    <p className="text-slate-600 dark:text-gray-400 text-lg mb-6">
                                        {selectedProject.longDesc}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-dark rounded-md text-sm font-medium dark:text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={selectedProject.link} className="btn-primary flex items-center gap-2">
                                            Live Demo <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <a href={selectedProject.github} className="px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white flex items-center gap-2">
                                            Github <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
