import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn';

const MiniAbout = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
            <FadeIn isActiveOnScroll>
                <span className="text-xs sm:text-sm font-medium text-primary mb-4 block">Why Tradi?</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl mx-auto mb-6 md:mb-8 leading-tight">
                    We design practical systems that help businesses operate <span className="text-white">faster</span> and <span className="text-white">smarter</span>.
                </h2>
                <p className="text-secondary max-w-2xl mx-auto mb-8 md:mb-10 text-base sm:text-lg leading-relaxed">
                    Every product is built for real-world use, not complexity. We don't sell hype, we deliver working software.
                </p>
                <Link to="/about" className="inline-block text-sm sm:text-base text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors">
                    Learn more about us
                </Link>
            </FadeIn>
        </section>
    );
};

export default MiniAbout;
