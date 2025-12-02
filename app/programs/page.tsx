import ProgramCard from "@/components/ProgramCard";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fitness Programs | IronForge Gym",
    description: "Explore our wide range of fitness programs including HIIT, Yoga, and Strength Training.",
};

const programs = [
    {
        title: "Weight Training",
        description: "Build raw strength and muscle mass with our comprehensive weight lifting programs designed for all levels.",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Cardio Fitness",
        description: "Improve your cardiovascular health and endurance with our high-energy cardio sessions.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Yoga & Pilates",
        description: "Enhance flexibility, balance, and core strength while finding mental clarity and focus.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop"
    },
    {
        title: "HIIT",
        description: "Burn maximum calories in minimum time with our High-Intensity Interval Training classes.",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop"
    },
    {
        title: "Zumba",
        description: "Dance your way to fitness with our fun, energetic, and rhythm-based Zumba classes.",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "CrossFit",
        description: "Push your limits with functional movements performed at high intensity for total body conditioning.",
        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ProgramsPage() {
    return (
        <>
            <section className="py-24 bg-black min-h-[60vh]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-6">
                            Our <span className="text-primary">Programs</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From strength training to mindfulness, we have a program designed to help you reach your specific goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <ProgramCard key={index} {...program} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
