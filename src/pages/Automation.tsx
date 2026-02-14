import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Automation = () => {
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

            {/* Solution Hero */}
            <section className="solution-hero">
                <div className="container">
                    <div className="hero-content-grid">
                        <div className="hero-text reveal">
                            <h1>Intelligent <span>Business Automation</span></h1>
                            <p>Eliminate repetitive tasks, reduce errors, and accelerate your operations with our custom workflow automation solutions.</p>
                            <div className="hero-ctas">
                                <button className="cta-primary">
                                    <i className="fa-solid fa-calendar-check"></i>
                                    Schedule a Consultation
                                </button>
                                <a href="#features" className="cta-secondary">
                                    <i className="fa-solid fa-arrow-down"></i>
                                    Explore Features
                                </a>
                            </div>
                            <div className="hero-trust">
                                <div className="trust-item"><i className="fa-solid fa-check-circle"></i> 500+ Flows Automate</div>
                                <div className="trust-item"><i className="fa-solid fa-check-circle"></i> 99.9% Uptime</div>
                            </div>
                        </div>
                        <div className="hero-visual reveal delay-200">
                            {/* 3D Scene Container */}
                            <div className="hero-scene-container">
                                <div className="hero-3d-scene">
                                    {/* Central Core */}
                                    <div className="automation-core">
                                        <i className="fa-solid fa-brain"></i>
                                    </div>

                                    {/* Orbit Rings */}
                                    <div className="automation-orbit orbit-1"></div>
                                    <div className="automation-orbit orbit-2"></div>

                                    {/* Floating Nodes (Icons representing connected apps/tasks) */}
                                    <div className="automation-node node-1" style={{ top: '10%', left: '50%' }}><i className="fa-solid fa-file-invoice-dollar"></i></div>
                                    <div className="automation-node node-2" style={{ top: '60%', left: '80%' }}><i className="fa-solid fa-envelope-open-text"></i></div>
                                    <div className="automation-node node-3" style={{ top: '80%', left: '20%' }}><i className="fa-solid fa-database"></i></div>

                                    <div className="automation-node node-rev-1" style={{ top: '20%', left: '10%' }}><i className="fa-brands fa-slack"></i></div>
                                    <div className="automation-node node-rev-2" style={{ top: '50%', right: '10%' }}><i className="fa-solid fa-bell"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Elements */}
                <div className="hero-glow" style={{ top: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(86, 217, 100, 0.2) 0%, transparent 70%)' }}></div>
                <div className="hero-glow" style={{ bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(253, 130, 0, 0.15) 0%, transparent 70%)', animationDelay: '-4s' }}></div>
            </section>

            {/* Client Logos */}
            <div className="client-logos">
                <div className="container">
                    <p className="logos-label">Trusted by innovative companies</p>
                    <div className="logos-grid">
                        <div className="logo-item">ACME Corp</div>
                        <div className="logo-item">Global Logistics</div>
                        <div className="logo-item">TechFlow Systems</div>
                        <div className="logo-item">Future Retail</div>
                        <div className="logo-item">Prime Estate</div>
                    </div>
                </div>
            </div>

            {/* Value Proposition */}
            <section className="section value-prop" id="features">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Why Automate?</h2>
                        <p className="section-subtitle">Manual processes are slow, error-prone, and costly. Automation is the opposite.</p>
                    </div>

                    <div className="value-grid">
                        <div className="value-card reveal delay-100">
                            <div className="value-icon problem"><i className="fa-regular fa-clock"></i></div>
                            <h3>Save Time</h3>
                            <p>Reclaim thousands of hours annually by letting bots handle data entry, reporting, and routine communication.</p>
                        </div>
                        <div className="value-card reveal delay-200">
                            <div className="value-icon result"><i className="fa-solid fa-bullseye"></i></div>
                            <h3>Zero Errors</h3>
                            <p>Eliminate human error. Automated workflows perform tasks efficiently and accurately, every single time.</p>
                        </div>
                        <div className="value-card reveal delay-300">
                            <div className="value-icon solution"><i className="fa-solid fa-arrow-trend-up"></i></div>
                            <h3>Scale Faster</h3>
                            <p>Handle 10x the workload without hiring 10x the staff. Automation scales instantly with your business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="section features-section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">What We Automate</h2>
                        <p className="section-subtitle">From simple tasks to complex cross-departmental processes.</p>
                    </div>

                    <div className="features-grid">
                        {/* Card 1 */}
                        <div className="feature-card reveal delay-100">
                            <div className="feature-icon"><i className="fa-solid fa-file-invoice"></i></div>
                            <h3>Finance & Invoicing</h3>
                            <p>Auto-generate invoices, chase payments, and reconcile bank statements.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> Auto-Invoicing</li>
                                <li><i className="fa-solid fa-check"></i> Expense Approvals</li>
                                <li><i className="fa-solid fa-check"></i> Payment Reminders</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="feature-card reveal delay-200">
                            <div className="feature-icon"><i className="fa-solid fa-people-arrows"></i></div>
                            <h3>HR & Onboarding</h3>
                            <p>Streamline employee onboarding, leave requests, and performance reviews.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> Digital Offer Letters</li>
                                <li><i className="fa-solid fa-check"></i> Equipment Provisioning</li>
                                <li><i className="fa-solid fa-check"></i> Leave Tracking</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="feature-card reveal delay-300">
                            <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                            <h3>Customer Support</h3>
                            <p>Resolve tickets faster with auto-routing, canned responses, and chatbots.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> Ticket Routing</li>
                                <li><i className="fa-solid fa-check"></i> SLA Monitoring</li>
                                <li><i className="fa-solid fa-check"></i> Feedback Collection</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="feature-card reveal delay-100">
                            <div className="feature-icon"><i className="fa-solid fa-bullhorn"></i></div>
                            <h3>Marketing Ops</h3>
                            <p>Automate lead nurturing, social media posting, and campaign reporting.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> Lead Scoring</li>
                                <li><i className="fa-solid fa-check"></i> Email Sequences</li>
                                <li><i className="fa-solid fa-check"></i> Ad Performance Alerts</li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className="feature-card reveal delay-200">
                            <div className="feature-icon"><i className="fa-solid fa-boxes-stacked"></i></div>
                            <h3>Inventory & Logistics</h3>
                            <p>Sync stock levels, trigger reorder points, and track shipments automatically.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> Stock Notifications</li>
                                <li><i className="fa-solid fa-check"></i> Order Processing</li>
                                <li><i className="fa-solid fa-check"></i> Supplier Management</li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className="feature-card reveal delay-300">
                            <div className="feature-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                            <h3>Custom Integrations</h3>
                            <p>Connect your favorite apps (Salesforce, Slack, Quickbooks, etc.) seamlessly.</p>
                            <ul className="feature-list">
                                <li><i className="fa-solid fa-check"></i> API Connectors</li>
                                <li><i className="fa-solid fa-check"></i> Data Syncing</li>
                                <li><i className="fa-solid fa-check"></i> Custom Webhooks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section use-cases-section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Success Stories</h2>
                        <p className="section-subtitle">Real-world examples of automation in action.</p>
                    </div>

                    <div className="use-cases-grid">
                        <div className="use-case-card reveal delay-100">
                            <div className="use-case-icon"><i className="fa-solid fa-building-user"></i></div>
                            <h3>Real Estate Firm</h3>
                            <p>"Reduced contract processing time by 80% using automated document generation and e-signatures."</p>
                            <a href="#" className="use-case-link">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="use-case-card reveal delay-200">
                            <div className="use-case-icon"><i className="fa-solid fa-cart-shopping"></i></div>
                            <h3>E-commerce Brand</h3>
                            <p>"Automated order fulfillment and customer notifications, saving 20 hours per week for the team."</p>
                            <a href="#" className="use-case-link">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="use-case-card reveal delay-300">
                            <div className="use-case-icon"><i className="fa-solid fa-gavel"></i></div>
                            <h3>Legal Consultancy</h3>
                            <p>"Implemented a client portal with auto-scheduling, reducing administrative overhead by 60%."</p>
                            <a href="#" className="use-case-link">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="use-case-card reveal delay-100">
                            <div className="use-case-icon"><i className="fa-solid fa-truck-medical"></i></div>
                            <h3>Medical Logistics</h3>
                            <p>"Ensured 100% compliance with automated temperature monitoring and reporting alerts."</p>
                            <a href="#" className="use-case-link">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2 className="section-title">Client Feedback</h2>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card reveal delay-100">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">"Aiva transformed our chaotic manual processes into a sleek, automated machine. The ROI was evident within the first month."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                                <div>
                                    <strong>Sarah J.</strong>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Operations Director</div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card reveal delay-200">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">"The team at Aiva really understood our specific needs. Their custom automation solution is now the backbone of our business."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                                <div>
                                    <strong>Mike T.</strong>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>CEO, TechStart</div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card reveal delay-300">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">"We were drowning in paperwork. Aiva's automation saved us from hiring two extra admin staff."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar"><i className="fa-solid fa-user"></i></div>
                                <div>
                                    <strong>Emily R.</strong>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Finance Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta" id="consultation" style={{ padding: '8rem 0', background: 'var(--gradient-hero)', color: 'white', textAlign: 'center', position: 'relative' }}>
                <div className="container reveal">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Automate Your Success?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#e2e8f0', maxWidth: '600px', margin: '0 auto 3rem' }}>Book a free 30-minute discovery call. We'll audit your current workflows and identify automation opportunities.</p>
                    <button className="cta-button" style={{ backgroundColor: 'white', color: 'var(--primary-color)', fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        Book Free Audit
                    </button>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: '0.8' }}>No obligation. 100% Free.</p>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container reveal">
                    <div className="footer-content">
                        <div>
                            <span className="footer-logo">Aiva<span>.</span></span>
                            <p style={{ color: '#cbd5e1', maxWidth: '300px', lineHeight: '1.8' }}>
                                Aiva Business Automation Solutions.
                            </p>
                        </div>
                        <div className="footer-links">
                            <h4>Solutions</h4>
                            <ul>
                                <li><a href="#">Business Automation</a></li>
                                <li><a href="#">CRM Integration</a></li>
                                <li><a href="#">Custom Dev</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">hello@aiva.com</a></li>
                                <li><a href="#">+1 (555) 123-4567</a></li>
                                <li><a href="#">Dubai, UAE</a></li>
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

export default Automation;
