import { Code, Bot, Cpu } from 'lucide-react';
import { FadeIn, FadeInStagger } from '../ui/FadeIn';

const services = [
    {
        icon: Code,
        title: "System Development",
        description: "Custom business systems for real operations. We build what you actually need."
    },
    {
        icon: Bot,
        title: "Automation",
        description: "Reduce manual work with smart workflows. Connect your tools and stop data entry."
    },
    {
        icon: Cpu,
        title: "AI Solutions",
        description: "Intelligent tools and automation. Leveraging the latest models for your business."
    }
];

const Services = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <FadeIn isActiveOnScroll>
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 md:mb-16 text-center md:text-left">What we do</h2>
            </FadeIn>

            <FadeInStagger isActiveOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, index) => (
                    <FadeIn key={index} className="p-6 sm:p-8 rounded-xl bg-card border border-white/5 hover:border-white/10 transition-colors h-full flex flex-col items-start gap-4">
                        <service.icon className="w-8 h-8 text-primary shrink-0" />
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-secondary leading-relaxed text-sm sm:text-base">{service.description}</p>
                        </div>
                    </FadeIn>
                ))}
            </FadeInStagger>
        </section>
    );
};

export default Services;
