
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Settings, Headphones } from 'lucide-react';

const steps = [
    { id: 1, title: 'Consultation', description: 'Free discovery call to understand your needs', icon: MessageSquare },
    { id: 2, title: 'Strategy', description: 'Custom implementation plan tailored for you', icon: FileText },
    { id: 3, title: 'Implementation', description: 'Expert setup and configuration', icon: Settings },
    { id: 4, title: 'Support', description: 'Ongoing training and optimization', icon: Headphones },
];

const Process = () => {
    return (
        <SectionWrapper>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Your Journey to Zoho Success</h2>
                <p className="text-lg text-slate-600">A simple 4-step process to transform your business</p>
            </div>

            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0" />
                <motion.div
                    className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-green/30 -translate-y-1/2 z-0 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="flex flex-col items-center text-center bg-white p-4 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.3 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-green flex items-center justify-center text-brand-green mb-6 shadow-lg relative">
                                <step.icon size={28} />
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-green-hover text-white text-xs flex items-center justify-center font-bold">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Process;
