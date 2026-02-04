import { Link } from 'react-router-dom';
import { FadeIn, FadeInStagger } from '../ui/FadeIn';

const projects = [
    {
        title: "Clinic Management System",
        description: "Complete reception and doctor dashboard.",
        status: "Live"
    },
    {
        title: "Retail Management System",
        description: "Retail system with real-time stock tracking.",
        status: "Live"
    },
    {
        title: "Tradi AI Tools",
        description: "Internal automation suite.",
        status: "Coming Soon"
    }
];

const Projects = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4">
                <FadeIn isActiveOnScroll>
                    <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
                </FadeIn>
                <FadeIn delay={0.1} className="hidden md:block">
                    <Link to="/projects" className="text-sm text-secondary hover:text-white transition-colors">View all work →</Link>
                </FadeIn>
            </div>

            <FadeInStagger isActiveOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => {
                    let isClickable = false;
                    let linkTo = "";

                    if (project.title === "Clinic Management System") {
                        isClickable = true;
                        linkTo = "/projects/clinic-system";
                    } else if (project.title === "Retail Management System") {
                        isClickable = true;
                        linkTo = "/projects/retail-system";
                    }

                    const CardWrapper = isClickable ? Link : 'div';
                    const linkProps = isClickable ? { to: linkTo } : {};

                    return (
                        <FadeIn key={index}>
                            <CardWrapper {...linkProps} className="group cursor-pointer block">
                                {/* Screenshot Placeholder */}
                                <div className="aspect-[16/10] bg-card rounded-lg border border-white/5 mb-4 relative overflow-hidden transition-all group-hover:border-white/10">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                                    {/* Simulated UI Content for Placeholder */}
                                    <div className="absolute inset-4 opacity-20 transform group-hover:scale-[1.02] transition-transform duration-500">
                                        <div className="w-1/3 h-3 sm:h-4 bg-white/20 rounded mb-3 sm:mb-4" />
                                        <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded mb-2" />
                                        <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded mb-2" />
                                        <div className="w-2/3 h-1.5 sm:h-2 bg-white/10 rounded" />
                                    </div>
                                </div>

                                <h3 className={`text-base sm:text-lg font-medium mb-1 transition-colors ${isClickable ? 'text-primary' : 'group-hover:text-primary'}`}>{project.title}</h3>
                                <p className="text-xs sm:text-sm text-secondary">{project.description}</p>
                            </CardWrapper>
                        </FadeIn>
                    );
                })}
            </FadeInStagger>

            {/* Mobile only link */}
            <FadeIn className="md:hidden mt-8 text-center">
                <Link to="/projects" className="text-sm text-secondary hover:text-white transition-colors">View all work →</Link>
            </FadeIn>
        </section>
    );
};

export default Projects;
