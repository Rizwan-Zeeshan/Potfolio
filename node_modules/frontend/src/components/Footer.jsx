import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-dark text-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-2xl font-bold gradient-text mb-6">Rizwan.dev</div>
                <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Built with precision and passion. Always striving for excellence in every pixel and line of code.
                </p>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 text-sm text-slate-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Muhammad Rizwan. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
