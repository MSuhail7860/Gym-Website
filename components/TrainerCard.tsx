import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "lucide-react";

interface TrainerCardProps {
    name: string;
    role: string;
    image: string;
    specialization: string;
    experience: string;
}

export default function TrainerCard({ name, role, image, specialization, experience }: TrainerCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-sm bg-muted border border-white/5 hover:border-primary/50 transition-all duration-300">
            <div className="relative h-[400px] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                    <a href="#" className="w-10 h-10 bg-white text-black hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-black hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-black hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white font-heading uppercase mb-1">{name}</h3>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">{role}</p>

                <div className="space-y-2 text-sm text-gray-400 border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                        <span>Specialization:</span>
                        <span className="text-white">{specialization}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="text-white">{experience}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
