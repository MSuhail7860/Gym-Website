import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
    name: string;
    price: string;
    features: string[];
    recommended?: boolean;
}

export default function PricingCard({ name, price, features, recommended = false }: PricingCardProps) {
    return (
        <div className={`relative p-8 rounded-sm border flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${recommended
                ? "bg-muted border-primary shadow-lg shadow-primary/10"
                : "bg-black border-white/10 hover:border-white/30"
            }`}>
            {recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold uppercase py-1 px-4 rounded-full tracking-wider">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-white font-heading uppercase mb-2">{name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-gray-400">/month</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="/join"
                className={`w-full py-4 font-bold uppercase tracking-wider rounded-sm text-center transition-colors duration-300 ${recommended
                        ? "bg-primary hover:bg-red-600 text-white"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
            >
                Choose Plan
            </Link>
        </div>
    );
}
