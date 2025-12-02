import { Dumbbell, Users, Clock, Trophy } from "lucide-react";

const features = [
    {
        icon: Dumbbell,
        title: "Modern Equipment",
        description: "Train with the latest high-tech machines and free weights designed for optimal results."
    },
    {
        icon: Users,
        title: "Expert Trainers",
        description: "Get personalized guidance from certified professionals who are passionate about your success."
    },
    {
        icon: Clock,
        title: "24/7 Access",
        description: "Work out on your schedule with round-the-clock access to all our facilities."
    },
    {
        icon: Trophy,
        title: "Proven Results",
        description: "Join thousands of members who have transformed their lives through our programs."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-muted p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-heading uppercase">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
