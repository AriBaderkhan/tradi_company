import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/sections/Footer';
import { FadeIn, FadeInStagger } from '../components/ui/FadeIn';

const Projects = () => {
    // Dummy Data for Projects (Text heavy, no images)
    const projects = [
        {
            title: "Clinic Management System",
            description: "A comprehensive SaaS platform for streamlining clinic operations, patient records, and appointment scheduling.",
            tags: ["React", "Node.js", "PostgreSQL"],
        },
        {
            title: "Retail Management System",
            description: "High-performance Point of Sale system designed for retail speed and reliability. Handles inventory and sales tracking.",
            tags: ["React", "Node.js", "PostgreSQL"],
        },
    ];

    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 flex flex-col">

            {/* Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Header */}
                    <FadeIn className="mb-16 md:mb-24 text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            Our Projects
                        </h1>
                        <p className="text-lg text-secondary max-w-2xl mx-auto">
                            We build systems that solve real problems. Here is a selection of our work.
                        </p>
                    </FadeIn>

                    {/* Project Grid */}
                    <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => {
                            let linkProps = {};
                            let CardWrapper = 'div';
                            let isClickable = false;

                            if (project.title === "Clinic Management System") {
                                isClickable = true;
                                CardWrapper = Link;
                                linkProps = { to: "/projects/clinic-system" };
                            } else if (project.title === "Retail Management System") {
                                isClickable = true;
                                CardWrapper = Link;
                                linkProps = { to: "/projects/retail-system" };
                            }

                            return (
                                <FadeIn key={index}>
                                    <CardWrapper
                                        {...linkProps}
                                        className={`group relative block bg-card border border-white/5 hover:border-white/20 p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between min-h-[300px] text-left ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                                    >
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-secondary border border-white/5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-base text-secondary leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white group-hover:translate-x-2 transition-transform">
                                            View Details
                                            <ArrowRight className="w-4 h-4" />
                                        </div>

                                    </CardWrapper>
                                </FadeIn>
                            );
                        })}
                    </FadeInStagger>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
