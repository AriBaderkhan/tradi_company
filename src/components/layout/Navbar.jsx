import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-white tracking-tight z-50">
                        Tradi.
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
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
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white z-50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Mobile Overlay Menu */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl md:hidden flex items-center justify-center">
                            <nav className="flex flex-col items-center gap-8">
                                {navLinks.map((link, index) => (
                                    <FadeIn key={link.name} delay={index * 0.1}>
                                        <Link
                                            to={link.path}
                                            className={`text-2xl font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-secondary'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </FadeIn>
                                ))}
                            </nav>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
};

export default Navbar;
