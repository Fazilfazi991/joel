import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import TrustBadges from '../components/sections/TrustBadges';
import FreeTrialBanner from '../components/sections/FreeTrialBanner';
import ProductsGrid from '../components/sections/ProductsGrid';
import Features from '../components/sections/Features';
import Industries from '../components/sections/Industries';
import Benefits from '../components/sections/Benefits';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';

import FinalCTA from '../components/sections/FinalCTA';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/sections/Footer';

function ZohoLanding() {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-dark">
            <Header />
            <main>
                <Hero />
                <TrustBadges />
                <FreeTrialBanner />
                <ProductsGrid />
                <Features />
                <Industries />
                <Benefits />
                <Process />
                <Testimonials />
                <FAQ />
                {/* Pricing Section Removed */}
                <FinalCTA />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default ZohoLanding;
