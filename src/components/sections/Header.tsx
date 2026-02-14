import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', href: '#products' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Resources', href: '#resources' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-brand-gray-200" : "bg-white border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
                            Z
                        </div>
                        <span className="text-2xl font-bold text-brand-dark tracking-tight">Zoho CRM</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-brand-gray-600 font-medium hover:text-brand-green transition-colors flex items-center gap-1"
                            >
                                {link.name}
                                {link.name === 'Products' && <ChevronDown size={16} />}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#" className="font-semibold text-brand-dark hover:text-brand-green transition-colors">Sign In</a>
                        <Button variant="primary" size="md" className="shadow-lg shadow-brand-green/20">
                            Get Started Free
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-brand-dark hover:text-brand-green transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-brand-gray-200">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-brand-dark hover:text-brand-green"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="border-brand-gray-200" />
                        <a href="#" className="font-semibold text-brand-dark hover:text-brand-green text-center py-2">Sign In</a>
                        <Button fullWidth variant="primary">Get Started Free</Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
