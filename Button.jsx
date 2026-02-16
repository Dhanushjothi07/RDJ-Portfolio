import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = "px-8 py-4 rounded-full font-bold tracking-wider transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group";

    const variants = {
        primary: "bg-tertiary text-primary hover:bg-white hover:shadow-[0_0_30px_rgba(248,248,248,0.4)] border border-white/20",
        outline: "border-2 border-secondary/50 text-white hover:border-white hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {/* Shimmer Effect Overlay */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:animate-shimmer pointer-events-none" />
            )}

            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};
