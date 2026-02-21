import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const res = await axios.post('http://localhost:5000/api/contact', formData);
            if (res.data.success) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (err) {
            setStatus({
                loading: false,
                success: false,
                error: err.response?.data?.message || 'Something went wrong. Please try again later.'
            });
        }
    };

    return (
        <section id="contact" className="section-padding bg-slate-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass dark:glass-dark p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-light/10 text-primary-light flex items-center justify-center">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm dark:text-gray-400">Email Me At</div>
                                        <div className="font-medium dark:text-white">rizwanshafique4321@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary-light/10 text-secondary-light flex items-center justify-center">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm dark:text-gray-400">Call Me</div>
                                        <div className="font-medium dark:text-white">03217175151</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm dark:text-gray-400">Location</div>
                                        <div className="font-medium dark:text-white">Gujranwala, Pakistan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="font-bold mb-4 dark:text-white">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Rizwan-Zeeshan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass dark:glass-dark flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rizwanshafique/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass dark:glass-dark flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="mailto:rizwanshafique4321@gmail.com" className="w-10 h-10 rounded-full glass dark:glass-dark flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass dark:glass-dark p-8 rounded-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark border border-slate-200 dark:border-slate-800 focus:border-primary-light outline-none transition-colors dark:text-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark border border-slate-200 dark:border-slate-800 focus:border-primary-light outline-none transition-colors dark:text-white"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium dark:text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark border border-slate-200 dark:border-slate-800 focus:border-primary-light outline-none transition-colors dark:text-white"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark border border-slate-200 dark:border-slate-800 focus:border-primary-light outline-none transition-colors dark:text-white resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status.loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                            </button>

                            {status.success && (
                                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 text-center font-medium">
                                    Message sent successfully!
                                </div>
                            )}
                            {status.error && (
                                <div className="p-4 rounded-xl bg-red-500/10 text-red-500 text-center font-medium">
                                    {status.error}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
