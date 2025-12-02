"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Member since 2023",
        content: "Joining IronForge was the best decision I've made for my health. The trainers are incredible and the community is so supportive.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "Pro Athlete",
        content: "The facilities here are world-class. I've trained at gyms all over the world, and IronForge stands out for its quality and atmosphere.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Emily Davis",
        role: "Yoga Instructor",
        content: "I love the variety of classes offered. Whether I want to lift heavy or find my flow, there's always something for me here.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-heading uppercase mb-4">
                        Success <span className="text-primary">Stories</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-muted/50 backdrop-blur-sm border border-white/5 rounded-sm p-8 md:p-12">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

                        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div>
                                        <h4 className="text-lg font-bold text-white font-heading uppercase">{testimonials[currentIndex].name}</h4>
                                        <span className="text-primary text-sm font-medium">{testimonials[currentIndex].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12">
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
