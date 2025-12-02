import Link from "next/link";
import { ArrowRight } from "lucide-react";

const classes = [
    {
        name: "Strength Training",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop",
        description: "Build muscle and increase strength with our comprehensive weight training programs.",
        link: "/strength-training"
    },
    {
        name: "HIIT Cardio",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop",
        description: "Burn calories and boost endurance with high-intensity interval training sessions.",
        link: "/hiit-cardio"
    },
    {
        name: "Yoga Flow",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop",
        description: "Improve flexibility, balance, and mental focus with our expert-led yoga classes.",
        link: "/yoga-flow"
    }
];

export default function ClassHighlights() {
    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading uppercase mb-4">
                            Featured <span className="text-primary">Classes</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Discover a wide range of classes designed to help you reach your fitness goals, no matter your experience level.
                        </p>
                    </div>
                    <Link
                        href="/programs"
                        className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors uppercase font-bold tracking-wider mt-4 md:mt-0"
                    >
                        View All Classes <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {classes.map((item, index) => (
                        <div key={index} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white font-heading uppercase mb-2">{item.name}</h3>
                                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.description}
                                </p>
                                <Link href={item.link} className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-white transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/programs"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors uppercase font-bold tracking-wider"
                    >
                        View All Classes <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
