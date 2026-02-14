
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FinalCTA = () => {
    return (
        <SectionWrapper background="green" className="bg-brand-green text-white text-center py-20">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                    className="text-xl text-brand-green-50 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Join 250,000+ businesses across 180 countries who trust Zoho to run their operations.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button variant="white" size="lg" className="font-bold text-brand-green px-8 shadow-lg">
                        Book Free Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-green px-8">
                        Start Free Trial
                    </Button>
                </motion.div>

                <motion.div
                    className="mt-8 flex items-center justify-center gap-2 text-brand-green-100 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Phone size={18} />
                    <span className="font-medium">Call Now: +91-9876543210</span>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FinalCTA;
