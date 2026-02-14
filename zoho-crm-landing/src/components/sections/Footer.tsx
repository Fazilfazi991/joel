import { Facebook, Twitter, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-brand-gray-400 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                Z
                            </div>
                            <span className="text-xl font-bold text-white">Zoho CRM Solutions</span>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm">
                            Empowering businesses with customized Zoho CRM solutions. We help you automate, optimize, and grow with the power of the cloud.
                        </p>
                        <div className="flex gap-4">
                            {/* Rotating social colors */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-violet hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-brand-green transition-colors">Home</a></li>
                            <li><a href="#features" className="hover:text-brand-green transition-colors">Features</a></li>
                            <li><a href="#products" className="hover:text-brand-green transition-colors">Products</a></li>
                            <li><a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-brand-green transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-brand-green transition-colors">Implementation</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Data Migration</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Custom Development</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Training</a></li>
                            <li><a href="#" className="hover:text-brand-green transition-colors">Ongoing Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
                        <p className="text-sm mb-4">Subscribe to our newsletter for the latest Zoho tips.</p>
                        <div className="flex gap-2 mb-8">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 border-none text-white px-4 py-2 rounded-lg flex-1 focus:ring-1 focus:ring-brand-green"
                            />
                            <button className="bg-brand-green text-white px-3 py-2 rounded-lg hover:bg-brand-green-hover transition-colors">
                                <Send size={18} />
                            </button>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-green mt-0.5" />
                                <span>123 Business Park, Tech City,<br />New York, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-green" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 Zoho CRM Solutions. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
