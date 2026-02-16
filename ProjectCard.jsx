import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, X, Maximize2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = ({ project, index }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    // Body scroll lock
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedImage]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-24 last:mb-0 max-w-6xl mx-auto"
            >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center text-center md:text-left`}>

                    {/* Project Content - Left Section */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 border border-emerald-500/30 text-emerald-500 bg-emerald-500/10"
                        >
                            {project.category === 'powerbi' ? 'Power BI' : 'Figma'} Project
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                            {project.title}
                        </h3>

                        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
                            {project.description}
                        </p>

                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm mb-6 max-w-3xl mx-auto md:mx-0 text-left group hover:bg-white/[0.05] transition-all duration-500">
                            <p className="text-gray-400 italic leading-relaxed text-sm">
                                {project.summary}
                            </p>
                        </div>

                        {/* Project Details - Side by Side on larger screens or stacked */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-6">
                            {project.problemStatements && (
                                <div className="p-5 rounded-2xl bg-red-500/[0.02] border border-red-500/10 hover:border-red-500/20 transition-colors">
                                    <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]" /> Challenge
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.problemStatements.slice(0, 3).map((point, i) => (
                                            <li key={i} className="text-gray-400 text-[12px] leading-relaxed flex gap-2">
                                                <span className="text-red-500/40 font-bold">→</span>
                                                <span className="line-clamp-2">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.impacts && (
                                <div className="p-5 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 hover:border-emerald-500/20 transition-colors">
                                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" /> Impact
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.impacts.slice(0, 3).map((point, i) => (
                                            <li key={i} className="text-gray-400 text-[12px] leading-relaxed flex gap-2">
                                                <span className="text-emerald-500/40 font-bold">✓</span>
                                                <span className="line-clamp-2">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Footer Actions - Integrated */}
                        <div className="flex flex-col items-center md:items-start gap-6 w-full mt-6">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {project.resolutions.map((res, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 text-[10px] hover:border-white/20 transition-colors cursor-default"
                                    >
                                        {res}
                                    </span>
                                ))}
                            </div>

                            {project.cta && (
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        if (project.cta.action) {
                                            project.cta.action();
                                        } else if (project.cta.to) {
                                            navigate('/', { state: { scrollTo: project.cta.to } });
                                        }
                                    }}
                                    className="group relative px-6 py-3 text-sm rounded-xl overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {project.cta.label} <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    </span>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Project Image/Visuals - Right Section */}
                    <motion.div
                        whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-full md:w-1/2 perspective-1000 group"
                    >
                        <div className={`absolute -inset-4 bg-gradient-to-tr ${project.color === 'white' ? 'from-white/20' : 'from-secondary/20'} to-transparent rounded-[2rem] blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000`}></div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/40 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                            <div className={`p-4 ${project.layout === '2x2' ? 'grid grid-cols-2 gap-3' : 'flex flex-col gap-3'}`}>
                                {project.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setSelectedImage(img)}
                                        className={`relative group/img overflow-hidden rounded-xl border border-white/5 bg-dark shadow-inner cursor-zoom-in ${project.layout === '2x2' ? 'aspect-[4/3] w-full' : 'aspect-video w-full'}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} view ${i + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                                                <Maximize2 className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-2xl"
                    >
                        {/* Background Overlay - Click to close */}
                        <div
                            className="absolute inset-0 cursor-zoom-out"
                            onClick={() => setSelectedImage(null)}
                        />

                        {/* Modal Container */}
                        <motion.div
                            layoutId={`img-${selectedImage}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[95vh] z-10 mx-4 overflow-y-auto custom-scrollbar rounded-2xl md:rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-dark/50"
                        >
                            <img
                                src={selectedImage}
                                alt="Full size preview"
                                className="w-full h-auto block select-none"
                            />

                            {/* Sticky Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedImage(null)}
                                className="fixed top-8 right-8 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all z-[110] shadow-xl"
                            >
                                <X className="w-6 h-6" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
