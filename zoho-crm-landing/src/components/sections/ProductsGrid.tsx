import SectionWrapper from '../ui/SectionWrapper';
import { Database, Briefcase, TrendingUp, MessageCircle, Mail, Users, Zap } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
    'database': Database,
    'briefcase': Briefcase,
    'trending-up': TrendingUp,
    'message-circle': MessageCircle,
    'mail': Mail,
    'users': Users,
    'zap': Zap,
};

const products = [
    {
        name: 'Zoho CRM',
        tagline: 'Convert leads and close deals faster',
        description: 'Complete customer relationship management solution with AI-powered sales automation and pipeline management.',
        icon: 'database',
        usedBy: '250,000+ businesses'
    },
    {
        name: 'Zoho Books',
        tagline: 'Smart accounting for growing businesses',
        description: 'End-to-end accounting software with automated workflows, GST compliance, and inventory management.',
        icon: 'briefcase',
        usedBy: '500,000+ organizations'
    },
    {
        name: 'Zoho Analytics',
        tagline: 'Actionable insights for data-driven decisions',
        description: 'Self-service BI platform with AI-powered analytics, advanced visualizations, and unified reporting.',
        icon: 'trending-up',
        usedBy: '100,000+ analysts'
    },
    {
        name: 'Zoho Desk',
        tagline: 'Deliver top-notch customer support',
        description: 'Context-aware customer service platform with multi-channel support and agent productivity tools.',
        icon: 'message-circle',
        usedBy: '50,000+ support teams'
    },
    {
        name: 'Zoho Campaigns',
        tagline: 'Create, send, and track email campaigns',
        description: 'Comprehensive email marketing platform with automation workflows, A/B testing, and analytics.',
        icon: 'mail',
        usedBy: '300,000+ marketers'
    },
    {
        name: 'Zoho People',
        tagline: 'Simplify HR operations',
        description: 'Comprehensive HR management system covering employee lifecycle, time tracking, and performance.',
        icon: 'users',
        usedBy: '30,000+ HR teams'
    },
    {
        name: 'Zoho Creator',
        tagline: 'Build custom apps without coding',
        description: 'Low-code application development platform to create custom business apps with powerful automation.',
        icon: 'zap',
        usedBy: '15,000+ businesses'
    },
    {
        name: 'Zoho One',
        tagline: 'One suite to run your entire business',
        description: 'Unified operating system for business with 45+ integrated applications covering all needs.',
        icon: 'briefcase',
        usedBy: '50,000+ organizations',
        featured: true
    },
    {
        name: 'Zoho Projects',
        tagline: 'Plan, track, and collaborate',
        description: 'Complete project management solution with task tracking, Gantt charts, and resource planning.',
        icon: 'briefcase',
        usedBy: '200,000+ project teams'
    },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const Icon = iconMap[product.icon] || Briefcase;

    // Rotation Strategy: Green -> Orange -> Violet
    const getColorClass = (i: number) => {
        const colors = [
            {
                bg: 'bg-brand-green-50',
                icon: 'text-brand-green',
                border: 'hover:border-brand-green',
                hoverBg: 'group-hover:bg-brand-green-50',
                titleHover: 'group-hover:text-brand-green'
            },
            {
                bg: 'bg-brand-orange-50',
                icon: 'text-brand-orange',
                border: 'hover:border-brand-orange',
                hoverBg: 'group-hover:bg-brand-orange-50',
                titleHover: 'group-hover:text-brand-orange'
            },
            {
                bg: 'bg-brand-violet-50',
                icon: 'text-brand-violet',
                border: 'hover:border-brand-violet',
                hoverBg: 'group-hover:bg-brand-violet-50',
                titleHover: 'group-hover:text-brand-violet'
            },
        ];
        return colors[i % 3];
    };

    const color = getColorClass(index);

    return (
        <div className={`group bg-white border border-brand-gray-200 rounded-lg p-6 h-full flex flex-col ${color.border} hover:shadow-lg transition-all cursor-pointer duration-300`}>
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${color.bg} rounded-lg flex items-center justify-center flex-shrink-0 ${color.hoverBg} transition-colors`}>
                    <Icon size={28} className={color.icon} />
                </div>
                <div className="flex-1">
                    <h3 className={`text-xl font-bold text-brand-dark mb-1 ${color.titleHover} transition-colors`}>
                        {product.name}
                    </h3>
                    {product.featured && (
                        <span className="inline-block bg-brand-green-50 text-brand-green-hover text-xs font-semibold px-2 py-1 rounded">
                            Most Popular
                        </span>
                    )}
                </div>
            </div>

            {/* Tagline */}
            <p className="text-brand-gray-600 font-medium mb-3">
                {product.tagline}
            </p>

            {/* Description */}
            <p className="text-brand-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
            </p>

            {/* Footer */}
            <div className="pt-4 border-t border-brand-gray-100 flex items-center justify-between">
                <span className="text-xs text-brand-gray-400">
                    {product.usedBy}
                </span>
                <span className={`font-semibold text-sm inline-flex items-center gap-1 transition-all ${color.icon} group-hover:gap-2`}>
                    <span>View Details</span>
                    <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

const ProductsGrid = () => {
    return (
        <SectionWrapper id="products" className="bg-brand-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Comprehensive Zoho Solutions</h2>
                <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto">
                    Powerful cloud-based applications to streamline your business operations,
                    boost productivity, and drive growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                ))}
            </div>

            <div className="text-center bg-white rounded-lg border border-brand-gray-200 p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                    Not sure which products you need?
                </h3>
                <p className="text-brand-gray-600 mb-6">
                    Schedule a free consultation with our experts to identify the perfect solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-brand-green text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-green-hover transition-colors">
                        Schedule Consultation
                    </button>
                    <button className="bg-white text-brand-green px-8 py-3 rounded-md font-semibold border-2 border-brand-green hover:bg-brand-green-50 transition-colors">
                        Download Product Guide
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProductsGrid;
