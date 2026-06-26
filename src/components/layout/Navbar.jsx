import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const REGISTER_URL = 'https://clinic-system-frontend-mu.vercel.app/register';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check scroll position for background effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-white tracking-tight z-50">
                        Tradi.
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-secondary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href={REGISTER_URL}>
                            <button className="group px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                                Subscribe
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle (Visible when closed) */}
                    {!isOpen && (
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 text-white"
                            aria-label="Open Menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    )}

                    {/* Mobile Menu Overlay & Drawer */}
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Drawer Panel */}
                            <div className="fixed inset-y-0 right-0 z-[101] w-[80%] max-w-sm bg-zinc-950 border-l border-white/10 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out">

                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/5">
                                    <span className="text-xl font-bold text-white tracking-tight">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                        aria-label="Close Menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 overflow-y-auto py-6">
                                    <nav className="flex flex-col px-3 gap-2">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === link.path
                                                        ? 'bg-primary/10 text-primary'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="px-3 mt-6">
                                        <a href={REGISTER_URL} onClick={() => setIsOpen(false)}>
                                            <button className="group w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-base font-medium transition-all flex items-center justify-center gap-2">
                                                Subscribe
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t border-white/5 bg-white/[0.02]">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Contact</p>
                                        <a href="mailto:tradicompany01@gmail.com" className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                                            tradicompany01@gmail.com
                                        </a>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-white/5">
                                        <p className="text-[10px] text-gray-600">
                                            Powered By <span className="font-semibold text-gray-500">Tradi Company</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </header>
    );
};

export default Navbar;
