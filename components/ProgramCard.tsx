import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ProgramCard({ title, description, image }: ProgramCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-sm h-[400px] cursor-pointer">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url("${image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white font-heading uppercase mb-4">{title}</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                    {description}
                </p>
                <Link
                    href="/join"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:text-white transition-colors"
                >
                    Join Program <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
