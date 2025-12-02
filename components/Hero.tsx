"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")' }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-heading uppercase leading-tight mb-6">
                        Unleash Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                            Inner Beast
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Transform your body and mind with state-of-the-art equipment, expert coaching, and a community that drives you to succeed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/join"
                            className="px-8 py-4 bg-primary hover:bg-red-600 text-white font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Start Free Trial
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
