import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

const stats = [
    { value: "27%", label: "Increased Productivity", sub: "Do more in less time" },
    { value: "50%", label: "Faster Implementation", sub: "Get started in no time" },
    { value: "71%", label: "Saved on Licensing Fees", sub: "Big savings for a lifetime" },
];

const Benefits = () => {
    // Colors for stats: Green, Orange, Violet
    const colors = [
        "text-brand-green",
        "text-brand-orange",
        "text-brand-violet"
    ];

    return (
        <SectionWrapper background="gray" className="border-y border-brand-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="p-6"
                    >
                        <motion.div
                            className={`text-6xl md:text-7xl font-bold mb-4 ${colors[index % 3]}`}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                        >
                            {stat.value}
                        </motion.div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">{stat.label}</h3>
                        <p className="text-brand-gray-600">{stat.sub}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Benefits;
