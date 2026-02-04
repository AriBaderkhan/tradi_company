const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-8 md:py-12 mt-12 bg-background">
            <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-secondary">
                    © 2025 Tradi Company.
                </div>

                <div className="flex gap-6 md:gap-8 text-sm text-secondary">
                    <a href="mailto:tradicompany01@gmail.com" className="hover:text-white transition-colors">Email</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="www.linkedin.com/in/ari-baderkhan-865752211" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;