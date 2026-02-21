import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '3+' },
        { label: 'Projects Completed', value: '20+' },
        { label: 'Happy Clients', value: '15+' },
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-dark-lighter">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image/Visual Part */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-secondary-light p-1">
                            <div className="w-full h-full bg-slate-100 dark:bg-dark-lighter rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src="/profile.jpeg"
                                    alt="Muhammad Rizwan"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://ui-avatars.com/api/?name=Muhammad+Rizwan&background=random&size=512";
                                    }}
                                />
                            </div>
                        </div>
                        {/* Floating Cards */}
                        <div className="absolute -bottom-6 -right-6 glass dark:glass-dark p-6 rounded-xl shadow-xl hidden md:block">
                            <div className="text-3xl font-bold gradient-text">3+</div>
                            <div className="text-sm dark:text-gray-400">Years of Experience</div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Passionate Developer Creating <span className="gradient-text">Impactful Digital Solutions</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            I am a dedicated Full Stack Developer with a strong focus on building scalable and user-friendly web applications.
                            My journey in software development is driven by a curiosity to solve complex problems and a commitment to clean code.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            Based in Gujranwala, Pakistan, I've worked with various technologies across the stack, ensuring that every project I touch
                            is built with performance, security, and aesthetics in mind.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mb-10">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl font-bold dark:text-white">{stat.value}</div>
                                    <div className="text-sm dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            className="inline-block btn-primary"
                        >
                            Learn More About My Work
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
