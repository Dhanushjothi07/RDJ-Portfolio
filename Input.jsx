import { twMerge } from 'tailwind-merge';

export const Input = ({ label, className, ...props }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm text-gray-400 ml-1">{label}</label>}
            <input
                className={twMerge(
                    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all hover:border-white/20",
                    className
                )}
                {...props}
            />
        </div>
    );
};

export const TextArea = ({ label, className, ...props }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm text-gray-400 ml-1">{label}</label>}
            <textarea
                className={twMerge(
                    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all min-h-[120px] resize-y hover:border-white/20",
                    className
                )}
                {...props}
            />
        </div>
    );
};
