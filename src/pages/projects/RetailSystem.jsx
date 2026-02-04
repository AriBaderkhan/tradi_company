import { ArrowLeft, ExternalLink, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/ui/FadeIn';
import Footer from '../../components/sections/Footer';
import mobileImage from '../../assets/mobile.png';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; // I need to check if this is available or use a simple display

const RetailSystem = () => {
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const [guideContent, setGuideContent] = useState('');

    useEffect(() => {
        import('../../assets/retail-system-guide.md?raw')
            .then(res => setGuideContent(res.default));
    }, []);

    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 flex flex-col">

            {/* Background Glow */}
            <div className="fixed top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[130px] rounded-full opacity-40 pointer-events-none" />

            {/* Documentation Modal */}
            {isGuideOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsGuideOpen(false)} />
                    <div className="relative w-full max-w-4xl bg-[#0f111a] border border-white/10 rounded-2xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-indigo-400" />
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
                                        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-indigo-300 mb-4 mt-8" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-white mb-3 mt-6" {...props} />,
                                        p: ({ node, ...props }) => <p className="text-base text-gray-300 mb-4 leading-7" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-300" {...props} />,
                                        li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                        strong: ({ node, ...props }) => <strong className="font-bold text-indigo-200" {...props} />,
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
                                <a href="mailto:tradicompany01@gmail.com" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 hover:border-indigo-500/40">
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
                                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">React</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Node.js</span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PostgreSQL</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Retail Management System
                                </h1>
                                <p className="text-xl text-secondary leading-relaxed">
                                    A complete, all-in-one Digital Command Center designed to modernize and simplify how a retail business operates.
                                </p>
                            </FadeIn>

                            <div className="space-y-10">
                                <FadeIn delay={0.1}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">The Central Brain</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        Instead of relying on manual paper trails or disconnected tools, this system acts as the central brain of the business, handling everything from the moment stock arrives to the final sale and financial analysis.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Smart Inventory: Dual-Tracking</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        The system uses a powerful "dual-tracking" engine: it manages standard items (like cases) in bulk, while simultaneously tracking high-value devices (like iPhones) individually by unique IMEI. This ensures every single phone is accounted for, eliminating errors and theft.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.3}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">POS & Financial Health</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        A lightning-fast checkout experience allows staff to scan items and process sales in seconds, generating digital PDF Receipts. Beyond sales, it tracks every purchase and expense, giving a clear view of where money is going.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.4}>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Automated Insights</h3>
                                    <p className="text-lg text-secondary leading-relaxed">
                                        With a single click, the system analyzes all sales, purchases, and expenses to generate detailed monthly performance reports, transforming a chaotic retail shop into a data-driven business operation.
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
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                    Live Demo Access
                                </h4>

                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm border-b border-white/5 pb-2 gap-1 sm:gap-0">
                                        <span className="text-secondary text-xs sm:text-sm">Username</span>
                                        <code className="bg-black/30 px-2 py-1 rounded text-indigo-200 font-mono select-all text-xs sm:text-sm w-fit">
                                            demo_user
                                        </code>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm gap-1 sm:gap-0">
                                        <span className="text-secondary text-xs sm:text-sm">Password</span>
                                        <code className="bg-black/30 px-2 py-1 rounded text-indigo-200 font-mono select-all text-xs sm:text-sm w-fit">
                                            demo_user!@#1
                                        </code>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://demo-store-weld.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 mb-6"
                            >
                                {/* Browser Toolbar Mockup */}
                                <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    <div className="ml-4 h-4 w-60 bg-white/5 rounded-full text-[10px] flex items-center px-2 text-gray-500 truncate">
                                        https://demo-store-weld.vercel.app
                                    </div>
                                </div>

                                {/* Main Image */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                                    <img
                                        src={mobileImage}
                                        alt="Retail System Demo"
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
                            <p className="text-center text-sm text-gray-500">
                                Click image to launch interactive demo
                            </p>
                            <br />

                            {/* Documentation Button */}
                            <button
                                onClick={() => setIsGuideOpen(true)}
                                className="w-full group flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/10 rounded-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-medium text-white group-hover:text-indigo-200 transition-colors">Documentation</h4>
                                        <p className="text-xs text-gray-500">Read the complete user guide</p>
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
                                <a href="mailto:tradicompany01@gmail.com" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 hover:border-indigo-500/40">
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

export default RetailSystem;
