import SectionWrapper from '../ui/SectionWrapper';

const testimonials = [
    {
        quote: "The implementation was seamless. We saw a 40% increase in lead conversion within the first 3 months of using our customized Zoho CRM setup.",
        author: "Sarah Johnson",
        role: "VP of Sales",
        company: "TechFlow Solutions"
    },
    {
        quote: "Their team understands business processes deeply. They didn't just install software; they optimized our entire sales workflow.",
        author: "Michael Chen",
        role: "Director of Operations",
        company: "Global Logistics Inc."
    },
    {
        quote: "Best investment we've made this year. The automation features alone have saved our team hundreds of hours manually entering data.",
        author: "David Smith",
        role: "CEO",
        company: "Smith & Co Realty"
    }
];

const Testimonials = () => {
    return (
        <SectionWrapper className="bg-brand-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">What Our Clients Say</h2>
                <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
                    Trusted by growing businesses across the globe.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg border border-brand-gray-200 p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                        {/* Rating Stars - Orange */}
                        <div className="flex mb-6 space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-brand-gray-600 mb-8 leading-relaxed flex-grow italic">
                            "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 bg-brand-gray-100 rounded-lg flex items-center justify-center font-bold text-brand-gray-500 text-lg">
                                {testimonial.author[0]}
                            </div>
                            <div>
                                <div className="font-bold text-brand-dark">{testimonial.author}</div>
                                <div className="text-sm text-brand-gray-600">{testimonial.role}</div>
                                <div className="text-sm text-brand-gray-400 font-medium">{testimonial.company}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
