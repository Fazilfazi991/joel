import SectionWrapper from '../ui/SectionWrapper';
import { Building2, Stethoscope, GraduationCap, ShoppingBag, Plane, BarChart3 } from 'lucide-react';

const industries = [
    { name: "Real Estate", icon: Building2 },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "Retail", icon: ShoppingBag },
    { name: "Travel", icon: Plane },
    { name: "Finance", icon: BarChart3 },
];

const Industries = () => {
    const getColorClass = (i: number) => {
        const colors = [
            { bg: 'bg-brand-green-50', icon: 'text-brand-green', border: 'hover:border-brand-green', hoverBg: 'group-hover:bg-brand-green-50' },
            { bg: 'bg-brand-orange-50', icon: 'text-brand-orange', border: 'hover:border-brand-orange', hoverBg: 'group-hover:bg-brand-orange-50' },
            { bg: 'bg-brand-violet-50', icon: 'text-brand-violet', border: 'hover:border-brand-violet', hoverBg: 'group-hover:bg-brand-violet-50' },
        ];
        return colors[i % 3];
    };

    return (
        <SectionWrapper id="industries" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Industries We Serve</h2>
                <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                    Tailored Zoho solutions for specific industry requirements and compliance standards.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {industries.map((industry, index) => {
                    const color = getColorClass(index);
                    return (
                        <div
                            key={industry.name}
                            className={`bg-white border border-brand-gray-200 rounded-lg p-8 text-center ${color.border} hover:shadow-sm transition-all duration-300 group cursor-pointer`}
                        >
                            <div className={`w-12 h-12 mx-auto ${color.bg} rounded-lg flex items-center justify-center mb-4 ${color.hoverBg} transition-colors`}>
                                <industry.icon size={24} className={color.icon} />
                            </div>

                            <h3 className="text-sm font-semibold text-brand-dark group-hover:text-brand-dark">
                                {industry.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Industries;
