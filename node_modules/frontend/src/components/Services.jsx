import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Smartphone, Search, BarChart } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            desc: 'Building responsive and performant websites using modern technologies like React and Tailwind CSS.',
            icon: <Globe className="w-8 h-8" />,
        },
        {
            title: 'Backend Development',
            desc: 'Creating robust server-side logic and database structures using Node.js and MongoDB.',
            icon: <Shield className="w-8 h-8" />,
        },
        {
            title: 'UI/UX Implementation',
            desc: 'Translating design mockups into pixel-perfect, interactive, and user-friendly interfaces.',
            icon: <Zap className="w-8 h-8" />,
        },
        {
            title: 'API Integration',
            desc: 'Developing and integrating third-party APIs to extend the functionality of your digital products.',
            icon: <Smartphone className="w-8 h-8" />,
        },
    ];

    return (
        <section className="section-padding bg-white dark:bg-dark-lighter">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Specialized <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Delivering high-quality solutions tailored to your specific business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-1 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-dark dark:to-dark-lighter"
                        >
                            <div className="bg-white dark:bg-dark-lighter p-10 rounded-2xl h-full flex flex-col items-start hover:shadow-2xl transition-shadow group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light/10 to-secondary-light/10 text-primary-light flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
