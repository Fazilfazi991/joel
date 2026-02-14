import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Navigation */}
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">Aiva<span>.</span></div>
                        <div className="nav-links">
                            <Link to="/" style={{ color: 'var(--primary-color)' }}>Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/crm">CRM</Link>
                            <a href="#">Industries</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <Link to="/zoho-landing" style={{ color: 'var(--brand-orange)' }}>Zoho CRM</Link>
                        </div>
                        <Link to="/crm#trial" className="cta-button">Get Started</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container reveal active">
                    <h1>Intelligent Solutions for <br /><span>Modern Businesses</span></h1>
                    <p>Streamline operations, boost efficiency, and drive growth with our comprehensive suite of automation
                        tools and custom software services.</p>
                    <div className="cta-group">
                        <Link to="/services" className="cta-button">Explore Services</Link>
                        <Link to="/crm" className="cta-button secondary">View CRM</Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Why Aiva?</h2>
                        <p className="section-subtitle">We build software that builds your business.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card reveal delay-100" style={{ cursor: 'pointer' }}>
                            <Link to="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="service-icon"><i className="fa-solid fa-rocket"></i></div>
                                <h3>Business Automation</h3>
                                <p>Reduce manual work and errors with intelligent automated workflows.</p>
                            </Link>
                        </div>

                        <div className="service-card reveal delay-200" style={{ cursor: 'pointer' }}>
                            <Link to="/crm" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="service-icon"><i className="fa-solid fa-users-gear"></i></div>
                                <h3>Advanced CRM</h3>
                                <p>Manage relationships and close more deals with our powerful CRM platform.</p>
                            </Link>
                        </div>

                        <div className="service-card reveal delay-300" style={{ cursor: 'pointer' }}>
                            <Link to="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                                <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                                <h3>Custom Development</h3>
                                <p>Tailor-made software solutions designed specifically for your unique needs.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container reveal">
                    <div className="footer-content">
                        <div>
                            <span className="footer-logo">Aiva<span>.</span></span>
                            <p style={{ color: '#cbd5e1', maxWidth: '300px', lineHeight: '1.8' }}>
                                Innovating business processes for tomorrow's leaders.
                            </p>
                        </div>
                        <div className="footer-links">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Solutions</h4>
                            <ul>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/crm">CRM Software</Link></li>
                                <li><a href="#">Consulting</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">FaceBook</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        &copy; 2026 Aiva. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
