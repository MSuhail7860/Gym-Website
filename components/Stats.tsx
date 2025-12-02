"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "5000+", label: "Happy Members" },
    { value: "50+", label: "Expert Trainers" },
    { value: "100+", label: "Weekly Classes" },
    { value: "15k", label: "Sq. Ft. Facility" }
];

export default function Stats() {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold font-heading mb-2">{stat.value}</div>
                            <div className="text-white/80 font-medium uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
