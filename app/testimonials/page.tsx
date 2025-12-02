import ReviewCard from "@/components/ReviewCard";
import BeforeAfter from "@/components/BeforeAfter";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Member Success Stories | IronForge Gym",
    description: "Read reviews and see real transformations from our dedicated members.",
};

const reviews = [
    {
        name: "John Doe",
        role: "Member",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        content: "The best gym I've ever been to. The equipment is top-notch and the staff is incredibly helpful.",
        rating: 5
    },
    {
        name: "Jane Smith",
        role: "Member",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        content: "I've achieved results I never thought possible. The personal training program is a game-changer.",
        rating: 5
    },
    {
        name: "Mike Johnson",
        role: "Member",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        content: "Great atmosphere and community. Everyone is so supportive and motivating.",
        rating: 4
    }
];

const transformations = [
    {
        name: "David R.",
        duration: "6 Months",
        result: "-30 lbs",
        beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Placeholder
        afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" // Placeholder
    },
    {
        name: "Sarah L.",
        duration: "4 Months",
        result: "+10 lbs Muscle",
        beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // Placeholder
        afterImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" // Placeholder
    }
];

export default function TestimonialsPage() {
    return (
        <>
            <section className="py-24 bg-black min-h-[60vh]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-6">
                            Member <span className="text-primary">Stories</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Real people, real results. See what our community has to say about their journey with IronForge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white font-heading uppercase mb-6">
                            Transformations
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {transformations.map((item, index) => (
                            <BeforeAfter key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
