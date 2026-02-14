import SectionWrapper from '../ui/SectionWrapper';
import { Brain, Share2, Workflow, PieChart, ArrowRight } from 'lucide-react';

const features = [
    {
        title: "AI-Powered Intelligence",
        description: "Supercharge your sales with Zia Agents - Multi-agent AI platform that predicts leads.",
        icon: Brain,
        cta: "Explore AI Features",
    },
    {
        title: "Seamless Integration",
        description: "Connect with 1000+ apps and tools instantly. From Google Workspace to Microsoft Office.",
        icon: Share2,
        cta: "View Integrations",
    },
    {
        title: "Advanced Automation",
        description: "Automate workflows, cadences, and no-code functions. Save time by automating repetitive tasks.",
        icon: Workflow,
        cta: "See Automation",
    },
    {
        title: "360° Customer View",
        description: "Complete customer insights in one unified platform. View emails, deals, notes, and social media.",
        icon: PieChart,
        cta: "Learn More",
    }
];

const Features = () => {
    // Rotation Strategy: Green -> Orange -> Violet -> Green
    const getColorClass = (i: number) => {
        const colors = [
            { bg: 'bg-brand-green-50', icon: 'text-brand-green', text: 'text-brand-green', hover: 'hover:text-brand-green-hover' },
            { bg: 'bg-brand-orange-50', icon: 'text-brand-orange', text: 'text-brand-orange', hover: 'hover:text-brand-orange-hover' },
            { bg: 'bg-brand-violet-50', icon: 'text-brand-violet', text: 'text-brand-violet', hover: 'hover:text-brand-violet-hover' },
            { bg: 'bg-brand-green-50', icon: 'text-brand-green', text: 'text-brand-green', hover: 'hover:text-brand-green-hover' },
        ];
        return colors[i % 4];
    };

    return (
        <SectionWrapper className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Why Choose Our Zoho CRM Services?</h2>
                <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                    Enterprise-grade solutions tailored for your business needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                {features.map((feature, index) => {
                    const color = getColorClass(index);
                    return (
                        <div key={feature.title} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className={`w-14 h-14 ${color.bg} rounded-lg flex items-center justify-center`}>
                                    <feature.icon size={28} className={color.icon} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-brand-gray-600 leading-relaxed mb-4">
                                    {feature.description}
                                </p>
                                <a href="#" className={`${color.text} font-semibold ${color.hover} inline-flex items-center gap-1 transition-colors`}>
                                    {feature.cta} <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Features;
