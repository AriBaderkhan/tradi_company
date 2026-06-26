import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Projects from '../components/sections/Projects';
import MiniAbout from '../components/sections/MiniAbout';
import Footer from '../components/sections/Footer';

const Home = () => {
    return (
        <main className="flex flex-col gap-24 pb-20">
            <Hero />
            <Services />
            <Pricing />
            <Projects />
            <MiniAbout />
            <Footer />
        </main>
    );
};

export default Home;
