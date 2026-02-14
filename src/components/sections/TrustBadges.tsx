import { ShieldCheck, Users, Clock } from 'lucide-react';

const TrustBadges = () => {
    return (
        <div className="bg-brand-gray-50 border-y border-brand-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 text-brand-gray-600">

                    <div className="trust-badge flex items-center gap-3">
                        <ShieldCheck className="text-brand-green" size={24} />
                        <span className="font-semibold">ISO 27001 Certified</span>
                    </div>
                    <div className="trust-badge flex items-center gap-3">
                        <Users className="text-brand-orange" size={24} />
                        <span className="font-semibold">300+ Businesses Trust Us</span>
                    </div>
                    <div className="trust-badge flex items-center gap-3">
                        <Clock className="text-brand-violet" size={24} />
                        <span className="font-semibold">10+ Years Excellence</span>
                    </div>
                    {/* Premier Partner Removed */}
                </div>
            </div>
        </div>
    );
};

export default TrustBadges;
