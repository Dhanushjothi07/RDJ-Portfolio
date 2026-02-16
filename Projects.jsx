import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Figma, ArrowRight } from 'lucide-react';

const projectImages = [
    // 3 Power BI Previews
    "/projects/emp 1.png",
    "/projects/student.png",
    "/projects/emp3.png",
    // 3 Figma Previews
    "/projects/NDS mockup.png",
    "/projects/NDS iPhone 15.png",
    "/projects/NDS mockup_mobile.png"
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Portfolio</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-base">
                        High-impact solutions tailored for business growth.
                    </p>
                </motion.div>

                {/* Main Container - Reduced Size & Padding */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-secondary/5 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-70 transition duration-1000"></div>

                    <div className="relative bg-surface/30 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden p-6 md:p-8">

                        {/* 6 Images Layout - 3 for PBI, 3 for Figma */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                            {projectImages.map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="aspect-video rounded-xl overflow-hidden border border-white/5 relative group/img cursor-crosshair"
                                >
                                    <img
                                        src={src}
                                        alt={`Project preview ${i + 1}`}
                                        className="w-full h-full object-cover blur-[2px] hover:blur-0 transition-all duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Two Columns for Categories - More Compact */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Power BI Column */}
                            <Link to="/power-bi-projects" className="group/card">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Power BI</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                                        Interactive dashboards transforming raw data into business strategies.
                                    </p>
                                    <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold group-hover/card:gap-3 transition-all">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            </Link>

                            {/* Figma Column */}
                            <Link to="/figma-projects" className="group/card">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                                        <Figma className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Figma Design</h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                                        Modern UI/UX designs and high-fidelity user-centric prototypes.
                                    </p>
                                    <div className="flex items-center gap-2 text-purple-500 text-sm font-bold group-hover/card:gap-3 transition-all">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
