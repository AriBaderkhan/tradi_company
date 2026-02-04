import { ArrowLeft, ExternalLink, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/ui/FadeIn';
import Footer from '../../components/sections/Footer';
import clinicImage from '../../assets/tradi.png';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const ClinicSystem = () => {
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const [guideContent, setGuideContent] = useState('');

    useEffect(() => {
        import('../../assets/clinic-system-guide.md?raw')
            .then(res => setGuideContent(res.default));
    }, []);

    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 flex flex-col">

            {/* Background Glow */}
            <div className="fixed top-0 right-0 w-[800px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40 pointer-events-none" />

            {/* Documentation Modal */}
            {isGuideOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsGuideOpen(false)} />
                    <div className="relative w-full max-w-4xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-green-400" />
                                User Guide
                            </h2>
                            <button
                                onClick={() => setIsGuideOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-secondary hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 12" /></svg>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-6 md:p-10 space-y-6 text-secondary leading-relaxed custom-scrollbar">
                            <div className="max-w-none">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mb-6 mt-8 border-b border-white/10 pb-4" {...props} />,
                                        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-green-300 mb-4 mt-8" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-white mb-3 mt-6" {...props} />,
                                        p: ({ node, ...props }) => <p className="text-base text-gray-300 mb-4 leading-7" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-300" {...props} />,
                                        li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                        strong: ({ node, ...props }) => <strong className="font-bold text-green-200" {...props} />,
                                        hr: ({ node, ...props }) => <hr className="border-white/10 my-8" {...props} />,
                                    }}
                                >
                                    {guideContent}
                                </ReactMarkdown>
                            </div>

                            {/* Feedback Footer within Modal */}
                            <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                <p className="text-white mb-2">We truly appreciate your interest in our system.</p>
                                <p className="text-sm text-secondary mb-4">Your feedback helps us grow and improve every single day.</p>
                                <a href="mailto:tradicompany01@gmail.com" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 hover:border-green-500/40">
                                    <Mail className="w-4 h-4" />
                                    tradicompany01@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Back Link */}
                    <FadeIn className="mb-12">
                        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* LEFT COLUMN: Text Content */}
                        <div className="space-y-12">
                            <FadeIn>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">React</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Node.js</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">PostgreSQL</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Clinic Management System
                                </h1>
                                <p className="text-xl text-secondary leading-relaxed">
                                    The Tradi project is a comprehensive, tailored SaaS solution creating a seamless digital ecosystem that bridges the gap between administrative operations and clinical care.
                                </p>
                            </FadeIn>

                            <div className="space-y-10">
                                <FadeIn delay={0.1}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">The Central Nervous System</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        At its core, the system acts as the clinic's "central nervous system," divided into two distinct but synchronized worlds: the Reception Dashboard and the Doctor Portal.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Command Center: Front Desk</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        For the Reception, it provides a powerful interface to manage the entire patient lifecycle—from registering new patient profiles and maintaining digital folders to scheduling appointments and processing payments. It tracks the financial health of the clinic with features for payment history and monthly reports, ensuring no revenue is lost.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.3}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Clinical Workspace: Doctors</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        Simultaneously, for the Doctors, it offers a focused clinical workspace where they can view their specific daily schedules, design comprehensive Treatment Plans, and record individual Sessions.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.4}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Connectivity</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        The "magic" that ties it all together is the real-time connectivity. When a doctor marks an appointment as complete, the reception is instantly notified, allowing for an immediate transition to billing. Under the hood, Tradi serves as the "engine" ensuring this complex dance of data, security, and user roles happens instantly and securely.
                                    </p>
                                </FadeIn>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Demo / Image */}
                        <FadeIn delay={0.5} className="lg:sticky lg:top-32">

                            {/* Live Demo Credentials Card */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm">
                                <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Live Demo Access
                                </h4>

                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm border-b border-white/5 pb-2 gap-1 sm:gap-0">
                                        <span className="text-secondary text-xs sm:text-sm">Email</span>
                                        <code className="bg-black/30 px-2 py-1 rounded text-primary-foreground font-mono select-all text-xs sm:text-sm w-fit">
                                            demo_clinic@tradi.com
                                        </code>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm gap-1 sm:gap-0">
                                        <span className="text-secondary text-xs sm:text-sm">Password</span>
                                        <code className="bg-black/30 px-2 py-1 rounded text-primary-foreground font-mono select-all text-xs sm:text-sm w-fit">
                                            demo@@11
                                        </code>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://demo-clinic-system.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 mb-4"
                            >
                                {/* Browser Toolbar Mockup */}
                                <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    <div className="ml-4 h-4 w-60 bg-white/5 rounded-full text-[10px] flex items-center px-2 text-gray-500 truncate">
                                        https://demo-clinic-system.vercel.app
                                    </div>
                                </div>

                                {/* Main Image */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                                    <img
                                        src={clinicImage}
                                        alt="Clinic System Demo"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <div className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Visit Live Demo <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <p className="text-center text-sm text-gray-500 mt-4 mb-4">
                                Click image to launch interactive demo
                            </p>

                            {/* Documentation Button */}
                            <button
                                onClick={() => setIsGuideOpen(true)}
                                className="w-full group flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-white/10 rounded-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-medium text-white group-hover:text-green-200 transition-colors">Documentation</h4>
                                        <p className="text-xs text-gray-500">Read the receptionist manual</p>
                                    </div>
                                </div>
                                <div className="text-gray-500 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </button>

                            {/* Feedback Section */}
                            <div className="mt-8 pt-8 border-t border-white/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                                <p className="text-white mb-2">We truly appreciate your interest in our system.</p>
                                <p className="text-sm text-secondary mb-4">Your feedback helps us grow and improve every single day.</p>
                                <a href="mailto:tradicompany01@gmail.com" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 hover:border-green-500/40">
                                    <Mail className="w-4 h-4" />
                                    tradicompany01@gmail.com
                                </a>
                            </div>

                        </FadeIn>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ClinicSystem;
