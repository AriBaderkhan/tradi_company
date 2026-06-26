import { ArrowRight, Mail } from 'lucide-react';
import { FadeIn, FadeInStagger } from '../ui/FadeIn';
import dashboardMock from '../../assets/dashboard-mock.png';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Text Content */}
                <FadeInStagger className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400 mb-6 lg:mb-8 w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            v1.0 Available Now
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] sm:leading-[1.1]">
                            We build systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">save time.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-lg sm:text-xl text-secondary mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Custom software, automation, and AI solutions for real-world businesses.
                            No fluff, just results.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                        <a href="https://clinic-system-frontend-mu.vercel.app/register">
                            <button className="group px-6 sm:px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                                Subscribe
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <a href="/projects">
                            <button className="px-6 sm:px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                                View Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                        <a href="mailto:tradicompany01@gmail.com">
                            <button className="px-6 sm:px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                                <Mail className="w-4 h-4" />
                                Contact
                            </button>
                        </a>
                    </FadeIn>
                </FadeInStagger>

                {/* Right: Dashboard Image */}
                <FadeIn delay={0.4} className="relative hidden lg:block perspective-1000">
                    <div className="relative rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl border border-white/10 transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
                        <img
                            src={dashboardMock}
                            alt="Tradi Clinic System Dashboard"
                            className="rounded-lg shadow-inner w-full h-auto"
                        />

                        {/* Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
