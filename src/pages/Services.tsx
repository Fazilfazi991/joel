import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // FAQ Accordion
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                    // Optional: Close others
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                });
            }
        });

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
                            <Link to="/">Home</Link>
                            <Link to="/services" style={{ color: 'var(--primary-color)' }}>Services</Link>
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
                <div className="hero-content container reveal">
                    <h1>Automate. Optimize. <span>Grow.</span></h1>
                    <p>At Aiva we strive to rule out repetitive and rule-based business tasks with minimal human intervention.
                        Focus on strategic activities while ensuring faster, more consistent operations.</p>
                    <a href="#services" className="cta-button">Explore Solutions</a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Our Solutions</h2>
                        <p className="section-subtitle">Comprehensive software tools designed to empower every aspect of your
                            business.</p>
                    </div>

                    <div className="services-grid">

                        {/* Business Automation */}
                        <div className="service-card reveal delay-100">
                            <div className="service-icon"><i className="fa-solid fa-robot"></i></div>
                            <h3>Business Automation</h3>
                            <p>Streamline your operations with intelligent workflows that reduce manual effort and increase
                                constant efficiency.</p>
                            <ul className="service-features">
                                <li>Automated Workflows</li>
                                <li>Rule-based Task Execution</li>
                                <li>Operational Consistency</li>
                                <li>Strategic Focus Enablement</li>
                            </ul>
                            <Link to="/automation" className="service-link">Learn More <i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* CRM */}
                        <div className="service-card reveal delay-200">
                            <div className="service-icon"><i className="fa-solid fa-users-viewfinder"></i></div>
                            <h3>CRM</h3>
                            <p>Build stronger relationships and drive sales with our advanced Customer Relationship Management
                                tools.</p>
                            <ul className="service-features">
                                <li>Lead Tracking & Management</li>
                                <li>Client Database & Pipeline Tracking</li>
                                <li>Quotation & Automated Follow-ups</li>
                                <li>Sales Performance Tracking</li>
                                <li>Real-time Reporting & Insights</li>
                            </ul>
                            <Link to="/crm" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* Finance */}
                        <div className="service-card reveal delay-300">
                            <div className="service-icon"><i className="fa-solid fa-chart-line"></i></div>
                            <h3>Finance</h3>
                            <p>Gain control over your financial health with our robust, cloud-based accounting solutions.</p>
                            <ul className="service-features">
                                <li>Cloud-based Accounting</li>
                                <li>Automated Expense Tracking & Banking</li>
                                <li>VAT & Tax Compliance</li>
                                <li>Inventory & Project Accounting</li>
                                <li>Sales, Purchase & Automated Reminders</li>
                            </ul>
                            <Link to="/finance" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* Human Resource */}
                        <div className="service-card reveal delay-100">
                            <div className="service-icon"><i className="fa-solid fa-user-tie"></i></div>
                            <h3>Human Resource</h3>
                            <p>Empower your workforce with end-to-end HR management, from onboarding to payroll.</p>
                            <ul className="service-features">
                                <li>Core HR Management & Employee Database</li>
                                <li>Onboarding, Off-boarding & Attendance</li>
                                <li>Leave Management & Approvals</li>
                                <li>Performance Management & LMS</li>
                                <li>Payroll Management & Analytics</li>
                            </ul>
                            <Link to="/hr" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* Custom App Developments */}
                        <div className="service-card reveal delay-200">
                            <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                            <h3>Custom App Development</h3>
                            <p>Tailor-made applications built with scalable architecture to fit your unique business needs.</p>
                            <ul className="service-features">
                                <li>Web & Mobile App Development</li>
                                <li>Scalable Architecture</li>
                                <li>User Friendly UI/UX Design</li>
                                <li>Cloud & On-premise Solutions</li>
                                <li>Data Security & Agile Methodology</li>
                            </ul>
                            <Link to="/apps" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* Retail Software Solutions */}
                        <div className="service-card reveal delay-300">
                            <div className="service-icon"><i className="fa-solid fa-store"></i></div>
                            <h3>Retail Solutions</h3>
                            <p>Optimize your retail business with integrated POS, scheduling, and client management tools.</p>
                            <ul className="service-features">
                                <li>Point of Sale (POS) & Payments</li>
                                <li>Online Booking & Scheduling</li>
                                <li>Smart Calendar & Client Profiles</li>
                                <li>Multi-Location Support</li>
                                <li>Reporting & Mobile Application</li>
                            </ul>
                            <Link to="/retail" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                        {/* Payment Solutions */}
                        <div className="service-card reveal delay-100">
                            <div className="service-icon"><i className="fa-solid fa-credit-card"></i></div>
                            <h3>Payment Solutions</h3>
                            <p>Secure, fast, and reliable payment processing integrations for seamless transactions.</p>
                            <ul className="service-features">
                                <li>Secure Payment Gateways</li>
                                <li>Multi-currency Support</li>
                                <li>Instant Transaction Processing</li>
                                <li>Fraud Protection Integration</li>
                            </ul>
                            <Link to="/payments" className="service-link">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-subtitle">Our streamlined process to transform your business.</p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step reveal delay-100">
                            <div className="step-icon">
                                <span className="step-number">1</span>
                                <i className="fa-solid fa-magnifying-glass-chart"></i>
                            </div>
                            <h3>Analyze</h3>
                            <p>We deeply analyze your current workflows and identify bottlenecks.</p>
                        </div>
                        <div className="process-step reveal delay-200">
                            <div className="step-icon">
                                <span className="step-number">2</span>
                                <i className="fa-solid fa-pencil-ruler"></i>
                            </div>
                            <h3>Strategize</h3>
                            <p>We design a tailored automation and software roadmap.</p>
                        </div>
                        <div className="process-step reveal delay-300">
                            <div className="step-icon">
                                <span className="step-number">3</span>
                                <i className="fa-solid fa-gears"></i>
                            </div>
                            <h3>Automate</h3>
                            <p>We implement the solutions with minimal disruption.</p>
                        </div>
                        <div className="process-step reveal delay-100">
                            <div className="step-icon">
                                <span className="step-number">4</span>
                                <i className="fa-solid fa-arrow-trend-up"></i>
                            </div>
                            <h3>Grow</h3>
                            <p>You focus on strategic growth while we handle the operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card reveal delay-100">
                            <h3>500+</h3>
                            <p>Clients Empowered</p>
                        </div>
                        <div className="stat-card reveal delay-200">
                            <h3>98%</h3>
                            <p>Client Retention</p>
                        </div>
                        <div className="stat-card reveal delay-300">
                            <h3>10k+</h3>
                            <p>Workflows Automated</p>
                        </div>
                        <div className="stat-card reveal delay-100">
                            <h3>24/7</h3>
                            <p>Support & Monitoring</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="section industries">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Industries We Serve</h2>
                        <p className="section-subtitle">Tailored solutions for a diverse range of sectors.</p>
                    </div>

                    <div className="industries-grid">
                        <div className="industry-card reveal delay-100">
                            <i className="fa-solid fa-building"></i>
                            <h4>Real Estate</h4>
                        </div>
                        <div className="industry-card reveal delay-200">
                            <i className="fa-solid fa-truck-fast"></i>
                            <h4>Logistics</h4>
                        </div>
                        <div className="industry-card reveal delay-300">
                            <i className="fa-solid fa-shop"></i>
                            <h4>General Trading</h4>
                        </div>
                        <div className="industry-card reveal delay-100">
                            <i className="fa-solid fa-plane-departure"></i>
                            <h4>Travel & Tourism</h4>
                        </div>
                        <div className="industry-card reveal delay-200">
                            <i className="fa-solid fa-briefcase"></i>
                            <h4>Corporate Services</h4>
                        </div>
                        <div className="industry-card reveal delay-300">
                            <i className="fa-solid fa-graduation-cap"></i>
                            <h4>Education</h4>
                        </div>
                        <div className="industry-card reveal delay-100">
                            <i className="fa-solid fa-car"></i>
                            <h4>Automobile</h4>
                        </div>
                        <div className="industry-card reveal delay-200">
                            <i className="fa-solid fa-helmet-safety"></i>
                            <h4>MEP / Field Service</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container transition">
                    <div className="section-header reveal">
                        <h2 className="section-title">Common Questions</h2>
                        <p className="section-subtitle">Everything you need to know about our services.</p>
                    </div>

                    <div className="accordion reveal delay-100">
                        <div className="accordion-item">
                            <div className="accordion-header">
                                How can automation help my business?
                                <i className="fa-solid fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Automation reduces repetitive manual tasks, minimizes errors, and speeds up operations,
                                    allowing your team to focus on high-value strategic work.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                Is my data secure with Aiva?
                                <i className="fa-solid fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Absolutely. We prioritize data security with enterprise-grade encryption and compliance with
                                    international data protection regulations.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                Can you integrate with our existing software?
                                <i className="fa-solid fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>Yes, our solutions are designed to be flexible and can integrate with most major ERP, CRM,
                                    and accounting software systems.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                Do you offer support after implementation?
                                <i className="fa-solid fa-chevron-down accordion-icon"></i>
                            </div>
                            <div className="accordion-content">
                                <p>We provide ongoing local support and maintenance to ensure your systems run smoothly and
                                    evolve with your business needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-section">
                <div className="container reveal">
                    <h2>Ready to <span>Transform</span> Your Business?</h2>
                    <p>Join hundreds of forward-thinking companies optimizing their operations with Aiva.</p>
                    <a href="#" className="cta-button" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>Get a Free
                        Consultation</a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container reveal">
                    <div className="footer-content">
                        <div>
                            <span className="footer-logo">Aiva<span>.</span></span>
                            <p style={{ color: '#cbd5e1', maxWidth: '300px', lineHeight: '1.8' }}>
                                Empowering businesses with intelligent automation and custom software solutions.
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
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/automation">Automation</Link></li>
                                <li><Link to="/crm">CRM</Link></li>
                                <li><Link to="/finance">Finance</Link></li>
                                <li><Link to="/hr">HR Management</Link></li>
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

export default Services;
