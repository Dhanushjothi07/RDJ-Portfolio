import { motion } from 'framer-motion';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Hero', id: 'hero' },
        { name: 'Benefits', id: 'benefits' },
        { name: 'Projects', id: 'projects' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            smoothScrollTo(id, 1200);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div onClick={() => handleNavClick('hero')} className="text-2xl font-bold text-white cursor-pointer tracking-tighter">
                    RDJ<span className="text-secondary">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest px-2 py-1"
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-surface border-t border-white/5 px-6 py-8 flex flex-col gap-6"
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className="text-lg font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-left"
                        >
                            {link.name}
                        </button>
                    ))}
                </motion.nav>
            )}
        </motion.header>
    );
};
