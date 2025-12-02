import TrainerCard from "@/components/TrainerCard";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Trainers | IronForge Gym",
    description: "Meet our elite team of certified personal trainers and coaches.",
};

const trainers = [
    {
        name: "Alex Sterling",
        role: "Head Coach",
        image: "/trainers/male-strength.png",
        specialization: "Strength & Conditioning",
        experience: "12 Years"
    },
    {
        name: "Sarah Jenkins",
        role: "Yoga Instructor",
        image: "/trainers/yoga.png",
        specialization: "Vinyasa & Hatha",
        experience: "8 Years"
    },
    {
        name: "Marcus Thorne",
        role: "CrossFit Coach",
        image: "/trainers/crossfit.png",
        specialization: "High Intensity Training",
        experience: "10 Years"
    },
    {
        name: "Elena Rodriguez",
        role: "HIIT Coach",
        image: "/trainers/female-hiit.png",
        specialization: "High Intensity Interval Training",
        experience: "7 Years"
    },
    {
        name: "David Kim",
        role: "Cardio Specialist",
        image: "/trainers/cardio.png",
        specialization: "Endurance & Stamina",
        experience: "9 Years"
    },
    {
        name: "Jessica Lee",
        role: "Zumba Instructor",
        image: "/trainers/zumba.png",
        specialization: "Dance Fitness",
        experience: "6 Years"
    }
];

export default function TrainersPage() {
    return (
        <>
            <section className="py-24 bg-black min-h-[60vh]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-6">
                            Meet Our <span className="text-primary">Team</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Our certified trainers are here to guide, motivate, and push you to achieve your personal best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer, index) => (
                            <TrainerCard key={index} {...trainer} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
