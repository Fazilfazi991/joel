import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Standard",
        audience: "Small Business",
        price: "$14",
        features: ["Scoring Rules", "Workflows", "Multiple Pipelines", "Mass Email"],
        recommended: false
    },
    {
        name: "Professional",
        audience: "Growing Business",
        price: "$23",
        features: ["SalesSignal", "Blueprint", "Web-to-Case Forms", "Validation Rules", "Inventory Management"],
        recommended: true
    },
    {
        name: "Enterprise",
        audience: "Large Teams",
        price: "$40",
        features: ["Zia AI", "CommandCenter", "Multi-user Portals", "Advanced Customization", "Mobile SDK"],
        recommended: false
    }
];

const Pricing = () => {
    return (
        <SectionWrapper background="gray">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Flexible Plans for Every Business Size</h2>
                <p className="text-lg text-brand-gray-600">Transparent pricing with no hidden costs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 bg-white border ${plan.recommended ? 'border-brand-green shadow-xl ring-2 ring-brand-green/20' : 'border-brand-gray-200 shadow-md'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        {plan.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                Most Popular
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                            <p className="text-sm text-brand-gray-600 mb-6">{plan.audience}</p>
                            <div className="flex items-end justify-center gap-1 mb-2">
                                <span className="text-4xl font-bold text-brand-dark">{plan.price}</span>
                                <span className="text-brand-gray-500 mb-1">/user/mo</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-brand-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-brand-green-50 flex items-center justify-center flex-shrink-0">
                                        <Check size={12} className="text-brand-green" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.recommended ? 'primary' : 'outline'}
                            fullWidth
                        >
                            Start Free Trial
                        </Button>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Pricing;
