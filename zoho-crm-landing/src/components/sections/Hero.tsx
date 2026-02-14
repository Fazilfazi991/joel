import { ArrowRight, ShieldCheck, Trophy } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="bg-white pt-32 pb-20 border-b border-brand-gray-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-hover px-4 py-2 rounded-full border border-brand-green-200 mb-8 w-fit">
                            <Trophy size={16} />
                            <span className="text-sm font-bold">#1 Rated CRM Implementation Partner</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight tracking-tight">
                            Transform Your Business with <span className="text-brand-green">Zoho CRM</span>
                        </h1>

                        <p className="text-xl text-brand-gray-600 mb-8 leading-relaxed max-w-lg">
                            Expert implementation, customization, and consulting. Streamline operations and scale your revenue.
                        </p>

                        {/* Buttons (Green & Orange) */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button size="lg" variant="primary" rightIcon={<ArrowRight size={18} />} className="shadow-xl shadow-brand-green/20">
                                Book Consultation
                            </Button>
                            <Button variant="orange" size="lg" className="shadow-lg shadow-brand-orange/20">
                                View Pricing
                            </Button>
                        </div>

                        {/* Stats (Mixed Colors) */}
                        <div className="grid grid-cols-3 gap-8 border-t border-brand-gray-200 pt-8">
                            <div className="stat-item">
                                <div className="text-4xl font-bold text-brand-green mb-1">200+</div>
                                <div className="text-brand-gray-600 font-medium text-sm">Active Clients</div>
                            </div>
                            <div className="stat-item">
                                <div className="text-4xl font-bold text-brand-orange mb-1">500+</div>
                                <div className="text-brand-gray-600 font-medium text-sm">Projects Done</div>
                            </div>
                            <div className="stat-item">
                                <div className="text-4xl font-bold text-brand-violet mb-1">10+</div>
                                <div className="text-brand-gray-600 font-medium text-sm">Years Exp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead Capture Form */}
                    <div className="bg-white rounded-2xl shadow-2xl shadow-brand-gray-900/10 p-8 border border-brand-gray-200 relative">
                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="mb-6 relative">
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Get Your Free Strategy Plan</h3>
                            <p className="text-brand-gray-600">Fill out the form below to connect with an expert.</p>
                        </div>

                        <form className="space-y-4 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="firstName" className="text-sm font-semibold text-brand-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 bg-white border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-brand-dark"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="lastName" className="text-sm font-semibold text-brand-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 bg-white border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-brand-dark"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-brand-gray-600">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-white border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-brand-dark"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="phone" className="text-sm font-semibold text-brand-gray-600">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 bg-white border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-brand-dark"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <Button
                                type="submit"
                                fullWidth
                                size="lg"
                                className="mt-2"
                            >
                                Request Consultation
                            </Button>

                            <div className="flex items-center justify-center gap-2 text-xs text-brand-gray-500 mt-4">
                                <ShieldCheck size={14} className="text-brand-green" />
                                <span>No spam policy. Your data is secure.</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
