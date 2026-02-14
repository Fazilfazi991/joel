import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import { ArrowRight } from 'lucide-react';

const FreeTrialBanner = () => {
    return (
        <SectionWrapper background="gradient" className="bg-brand-green text-white py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Begin your Zoho journey with a one-month free subscription!
                    </h2>
                    <p className="text-brand-green-50 text-lg opacity-90">
                        No credit card required. Full access to all features.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Button
                        variant="white"
                        size="lg"
                        rightIcon={<ArrowRight className="text-brand-green" />}
                        className="text-brand-green font-bold shadow-2xl"
                    >
                        Start Free Trial Now
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FreeTrialBanner;
