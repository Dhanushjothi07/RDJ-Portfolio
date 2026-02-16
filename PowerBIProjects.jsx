import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PowerBIProjects = () => {
    const powerBIProjects = projects.filter(p => p.category === 'powerbi');

    return (
        <div className="min-h-screen bg-dark pt-32 pb-20">
            <div className="container mx-auto px-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-center">
                        Power BI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
                        A showcase of data analytics dashboards designed to turn complex data into actionable business intelligence.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {powerBIProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
