import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Arjun Sharma",
        role: "CEO, TechFlow Solutions",
        content: "The 3D integration specifically transformed how we present our products. Absolutely stunning work!",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
    },
    {
        name: "Priya Patel",
        role: "Marketing Director, Vyapar Pro",
        content: "Incredible attention to detail. The site isn't just beautiful, it converts.",
        image: "https://images.unsplash.com/photo-1621252179027-94459d278660?w=400&h=400&fit=crop"
    },
    {
        name: "Rohan Gupta",
        role: "Founder, Innovate India",
        content: "Fast, responsive, and secure. Everything I needed for my new SaaS platform.",
        image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=400&h=400&fit=crop"
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Our Clients Say</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-surface/50 p-8 rounded-2xl border border-white/5 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(123,123,123,0.1)] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-secondary" />
                                <div>
                                    <h4 className="font-bold text-lg text-white">{t.name}</h4>
                                    <p className="text-secondary text-sm">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">"{t.content}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
