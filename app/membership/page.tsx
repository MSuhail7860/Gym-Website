import PricingCard from "@/components/PricingCard";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Membership Plans | IronForge Gym",
    description: "Choose the perfect membership plan for your fitness journey. No hidden fees.",
};

const plans = [
    {
        name: "Basic",
        price: "29",
        features: [
            "Access to Gym Floor",
            "Locker Room Access",
            "Free WiFi",
            "Open 24/7"
        ]
    },
    {
        name: "Standard",
        price: "59",
        features: [
            "All Basic Features",
            "Group Fitness Classes",
            "Guest Pass (1/month)",
            "Fitness Assessment",
            "Sauna Access"
        ],
        recommended: true
    },
    {
        name: "Premium",
        price: "99",
        features: [
            "All Standard Features",
            "Personal Training (2x/month)",
            "Nutrition Consultation",
            "Unlimited Guest Passes",
            "Priority Support",
            "Exclusive Merch"
        ]
    }
];

export default function MembershipPage() {
    return (
        <>
            <section className="py-24 bg-black min-h-[60vh] flex flex-col justify-center">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-6">
                            Membership <span className="text-primary">Plans</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Choose the plan that fits your goals. No hidden fees, no long-term contracts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
