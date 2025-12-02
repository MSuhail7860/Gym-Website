import Image from "next/image";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | IronForge Gym",
    description: "Learn about our story, mission, and the expert team behind IronForge Gym.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop")' }}
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-4">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        More than just a gym. We are a community dedicated to strength, resilience, and personal growth.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white font-heading uppercase mb-6">
                                Our <span className="text-primary">Story</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 leading-relaxed">
                                <p>
                                    Founded in 2010, IronForge Gym started with a simple mission: to create a training facility where serious athletes and beginners alike could find the tools and support they need to succeed.
                                </p>
                                <p>
                                    What began as a small warehouse gym has grown into a premier fitness destination, but our core values remain the same. We believe in hard work, no shortcuts, and the power of community.
                                </p>
                                <p>
                                    Our facility is equipped with the best machinery in the industry, but it's our people that make the difference. From our expert trainers to our supportive members, everyone at IronForge is here to help you become your best self.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2070&auto=format&fit=crop"
                                alt="Gym Interior"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Stats />

            {/* Mission & Vision */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-black p-10 rounded-sm border border-white/5">
                            <h3 className="text-2xl font-bold text-white font-heading uppercase mb-4">Our Mission</h3>
                            <p className="text-gray-400">
                                To empower individuals to reach their full potential through physical fitness, mental toughness, and a supportive community environment.
                            </p>
                        </div>
                        <div className="bg-black p-10 rounded-sm border border-white/5">
                            <h3 className="text-2xl font-bold text-white font-heading uppercase mb-4">Our Vision</h3>
                            <p className="text-gray-400">
                                To be the leading fitness destination that redefines what it means to be strong, healthy, and capable, inspiring a global movement of self-improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
