import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Senior Full Stack Developer',
            company: 'Digital Solutions Inc.',
            period: '2023 - Present',
            desc: 'Leading development of enterprise-scale web applications, mentoring junior developers, and optimizing system architectures.',
        },
        {
            type: 'work',
            title: 'Full Stack Developer',
            company: 'Tech Innovators',
            period: '2021 - 2023',
            desc: 'Developed and maintained various client projects using MERN stack. Improved application performance by 40%.',
        },
        {
            type: 'education',
            title: 'Bachelor of Computer Science',
            company: 'University of Engineering and IT',
            period: '2023 - 2027',
            desc: 'Graduated with honors. Focused on algorithms, database management, and web technologies.',
        },
    ];

    return (
        <section className="section-padding bg-white dark:bg-dark-lighter">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        A timeline of my professional experience and educational background.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-light border-4 border-white dark:border-dark-lighter z-10 -translate-x-1/2" />

                                <div className="ml-12 md:ml-0 md:w-[45%]">
                                    <div className={`glass dark:glass-dark p-6 rounded-2xl hover:border-primary-light/50 transition-colors ${idx % 2 !== 0 ? 'md:text-right' : ''
                                        }`}>
                                        <div className={`flex items-center gap-3 mb-4 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                            }`}>
                                            <div className="w-10 h-10 rounded-full bg-primary-light/10 text-primary-light flex items-center justify-center shrink-0">
                                                {exp.type === 'work' ? (
                                                    <Briefcase className="w-5 h-5" />
                                                ) : (
                                                    <GraduationCap className="w-5 h-5" />
                                                )}
                                            </div>
                                            <span className="text-sm font-bold text-primary-light">{exp.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold dark:text-white mb-1">{exp.title}</h3>
                                        <div className="text-slate-500 dark:text-slate-400 font-medium mb-4">
                                            {exp.company}
                                        </div>
                                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
