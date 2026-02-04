import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, className = "", isActiveOnScroll = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActiveOnScroll ? undefined : { opacity: 1, y: 0 }}
            whileInView={isActiveOnScroll ? { opacity: 1, y: 0 } : undefined}
            viewport={isActiveOnScroll ? { once: true, margin: "-50px" } : undefined}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeInStagger = ({ children, className = "", isActiveOnScroll = false }) => {
    return (
        <motion.div
            initial="hidden"
            animate={isActiveOnScroll ? undefined : "visible"}
            whileInView={isActiveOnScroll ? "visible" : undefined}
            viewport={isActiveOnScroll ? { once: true, margin: "-50px" } : undefined}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
