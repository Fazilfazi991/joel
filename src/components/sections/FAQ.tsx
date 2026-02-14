import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Can I integrate my favorite apps with Zoho CRM?",
        answer: "Yes, Zoho CRM integrates with over 500+ popular business apps including Google Workspace, Microsoft Office 365, Slack, Mailchimp, and many more. We can also build custom integrations using Zoho's REST API."
    },
    {
        question: "How do I know what's the right edition for me?",
        answer: "The right edition depends on your business size and requirements. We recommend booking a free consultation where our experts can assess your needs and suggest the most cost-effective plan, whether it's Standard, Professional, Enterprise, or Ultimate."
    },
    {
        question: "How flexible are the contracts?",
        answer: "Zoho offers both monthly and yearly billing options. You can switch plans or cancel at any time. Annual plans typically come with a significant discount."
    },
    {
        question: "How do I migrate to Zoho CRM?",
        answer: "Migration is seamless with our expert assistance. We help map your existing data from Excel, Salesforce, HubSpot, or other CRMs to Zoho, ensuring no data loss and maintaining data integrity."
    },
    {
        question: "Is Zoho CRM available for my industry?",
        answer: "Absolutely. Zoho CRM is highly customizable and serves businesses across wide-ranging industries including Real Estate, Healthcare, Education, Retail, Finance, and Manufacturing."
    },
    {
        question: "Does Zoho CRM have a free plan?",
        answer: "Yes, Zoho CRM offers a Free Edition for up to 3 users with essential features like lead management, contacts, and deals. It's a great way to get started."
    },
    {
        question: "What support do you provide?",
        answer: "We provide end-to-end support including implementation, customization, user training, and ongoing maintenance. Our team is available via phone, email, and chat to resolve any queries."
    },
    {
        question: "How long does implementation take?",
        answer: "Implementation time varies based on complexity. A standard setup can take 1-2 weeks, while a complex enterprise customization might take 4-8 weeks. We provide a detailed timeline after the initial discovery call."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <SectionWrapper>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
                <p className="text-lg text-slate-600">Everything you need to know about Zoho CRM</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-100 rounded-lg overflow-hidden bg-white shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === index ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
                        >
                            <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary-500' : 'text-slate-900'}`}>
                                {faq.question}
                            </span>
                            {openIndex === index ? <Minus className="text-primary-500" /> : <Plus className="text-slate-400" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
