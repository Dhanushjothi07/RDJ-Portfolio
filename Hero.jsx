import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Scene } from './Scene';
import { ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Scene />
            </div>

            {/* Gradient Overlay for Text Readability - Darker for neon pop */}
            <div className="absolute inset-0 bg-dark/20 z-0 pointer-events-none" />

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left relative"
                >
                    {/* Text Glow Effect */}
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Digital Presence</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        I am a Business Analyst focused on delivering AI-driven insights, advanced Power BI dashboards, and strategic web application solutions.
                        I convert complex datasets into meaningful, decision-ready intelligence using Microsoft Power BI.
                        Through Microsoft Excel, I execute comprehensive data cleansing and analytical processes to support informed strategic planning.
                        I design intuitive, user-centric interfaces using Figma, ensuring alignment between UX and business objectives.
                        By integrating AI capabilities, I enable predictive intelligence and automation.
                        My methodology combines data analytics, technology integration, and UX strategy to deliver scalable digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button onClick={() => smoothScrollTo('contact', 1500)}>
                            Work With Me <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Profile Image with Glassmorphism Card Effect */}
                    <div className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 border border-white/10 group bg-surface/50 backdrop-blur-sm">
                        <img
                            src="./projects/profile.jpg"
                            alt="RDJ Profile"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <div>
                                <h3 className="text-xl font-bold text-white">Dhanushjothi -RDJ</h3>
                                <p className="text-sm text-secondary">Digital Creator</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full blur-xl opacity-10 animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-10 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};
