import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Zoho CRM Implementation',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submitting logic here
        console.log(formData);
        alert("Thank you for your message! We'll get back to you shortly.");
    };

    return (
        <SectionWrapper id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Get in Touch</h2>
                        <p className="text-brand-gray-600 text-lg">
                            Have questions about Zoho implementation? Our certified experts are here to help.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-brand-green-50 flex items-center justify-center text-brand-green shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-dark mb-1">Visit Us</h3>
                                <p className="text-brand-gray-600">123 Business Park, Tech District,<br />Bangalore, India 560001</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-brand-orange-50 flex items-center justify-center text-brand-orange shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-dark mb-1">Email Us</h3>
                                <p className="text-brand-gray-600">hello@zohopartner.com</p>
                                <p className="text-brand-gray-600">support@zohopartner.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-brand-violet-50 flex items-center justify-center text-brand-violet shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-brand-dark mb-1">Call Us</h3>
                                <p className="text-brand-gray-600">+91 98765 43210</p>
                                <p className="text-brand-gray-600">Mon-Fri, 9am - 6pm IST</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-brand-gray-900">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-brand-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@company.com"
                                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-brand-gray-900">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-brand-gray-900">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company"
                                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-brand-dark"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-brand-gray-900">Interested Service</label>
                            <select
                                name="service"
                                className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white text-brand-dark"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option>Zoho CRM Implementation</option>
                                <option>Zoho One Setup</option>
                                <option>Migration Services</option>
                                <option>Training & Support</option>
                                <option>Custom Development</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-brand-gray-900">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell us about your requirements..."
                                className="w-full px-4 py-3 rounded-lg border border-brand-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none text-brand-dark"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <Button type="submit" fullWidth size="lg" className="rounded-xl flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </Button>
                    </form>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default ContactForm;
