import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

const params = [
    {
        icon: <Rocket className="w-8 h-8 text-red-500" />,
        title: "High Performance",
        desc: "Optimized for speed and efficiency using the latest web technologies."
    },
    {
        icon: <Shield className="w-8 h-8 text-emerald-500" />,
        title: "Secure & Reliable",
        desc: "Built with security best practices to keep your data safe."
    },
    {
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        title: "Fast Development",
        desc: "Rapid prototyping and deployment to get you to market quicker."
    },
    {
        icon: <Globe className="w-8 h-8 text-sky-400" />,
        title: "Global Reach",
        desc: "Accessible anywhere, anytime, on any device."
    }
];

const Card = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-surface/50 border border-white/5 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(123,123,123,0.15)] transition-all cursor-default group"
        >
            <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-secondary transition-colors">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
        </motion.div>
    );
};

export const Benefits = () => {
    return (
        <section id="benefits" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Us?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We deliver exceptional digital experiences through a combination of technical expertise and creative innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {params.map((item, idx) => (
                        <Card key={idx} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
