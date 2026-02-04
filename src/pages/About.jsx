import founderImage from '../assets/founder.png';
import Footer from '../components/sections/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FadeIn, FadeInStagger } from '../components/ui/FadeIn';

const About = () => {
    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 flex flex-col">

            {/* Main Content Wrapper */}
            <main className="flex-grow pt-24 pb-32 relative overflow-hidden">
                {/* Background Glow (Same as Hero) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">

                    {/* Back Link */}
                    <FadeIn className="mb-20">
                        <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>
                    </FadeIn>

                    {/* 1. Page Title */}
                    <FadeIn className="text-center mb-24 md:mb-32">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            About Tradi Company
                        </h1>
                    </FadeIn>

                    {/* 2. Company Paragraphs (First) */}
                    <div className="space-y-8 text-lg sm:text-xl text-secondary leading-relaxed mb-32 md:mb-40 max-w-3xl mx-auto text-center">
                        <FadeIn delay={0.1}>
                            <p>
                                We are the Tradi team, based in Kurdistan.
                                Founded on 28/10/2025, Tradi was built on one simple principle: take responsibility and deliver results.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p>
                                We design and build custom software systems that help businesses save time, reduce manual work, and operate more efficiently.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p>
                                Every product we create is practical, reliable, and focused on solving real-world problems.
                            </p>
                        </FadeIn>
                    </div>

                    {/* 3. Values / Principles Cards (Second) */}
                    <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-32 md:mb-40">
                        <FadeIn className="p-6 rounded-lg bg-card border border-white/5 text-center">
                            <h3 className="text-white font-medium mb-3">Practical</h3>
                            <p className="text-sm text-secondary leading-relaxed">We build tools that solve real business problems.</p>
                        </FadeIn>
                        <FadeIn className="p-6 rounded-lg bg-card border border-white/5 text-center">
                            <h3 className="text-white font-medium mb-3">Reliable</h3>
                            <p className="text-sm text-secondary leading-relaxed">Stable systems designed for daily operations.</p>
                        </FadeIn>
                        <FadeIn className="p-6 rounded-lg bg-card border border-white/5 text-center">
                            <h3 className="text-white font-medium mb-3">Simple</h3>
                            <p className="text-sm text-secondary leading-relaxed">Clarity over complexity.</p>
                        </FadeIn>
                        <FadeIn className="p-6 rounded-lg bg-card border border-white/5 text-center">
                            <h3 className="text-white font-medium mb-3">Future-Focused</h3>
                            <p className="text-sm text-secondary leading-relaxed">Automation and AI-driven solutions.</p>
                        </FadeIn>
                    </FadeInStagger>

                    {/* 4. Team Member Section (Third - Bottom) */}
                    {/* Increased gap between Image and Text */}
                    <FadeInStagger delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
                        {/* Image (Left) */}
                        <FadeIn className="relative w-[300px] sm:w-[420px] shrink-0">
                            {/* Subtle shadow */}
                            <div className="absolute inset-x-8 bottom-0 h-8 bg-black/50 blur-2xl rounded-full" />
                            <img
                                src={founderImage}
                                alt="Ari"
                                className="relative w-full h-auto object-contain drop-shadow-2xl transition-all duration-700"
                            />
                        </FadeIn>

                        {/* Text (Right) */}
                        <FadeIn className="text-center md:text-left max-w-lg">
                            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">Ari Baderkhan</h3>
                            <h4 className="text-md sm:text-lg text-secondary mb-8">Tradi Member</h4>

                            <div className="pl-6 border-l-7 border-primary/30 py-1 hover:border-primary transition-colors duration-700">
                                <p className="text-lg sm:text-xl text-white italic leading-relaxed font-light">
                                    "We believe in simplicity over complexity."
                                </p>
                            </div>
                        </FadeIn>
                    </FadeInStagger>

                </div>
            </main>

            {/* 5. Footer */}
            <Footer />
        </div>
    );
};

export default About;
