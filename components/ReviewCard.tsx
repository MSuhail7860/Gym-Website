import { Star } from "lucide-react";

interface ReviewCardProps {
    name: string;
    role: string;
    image: string;
    content: string;
    rating: number;
}

export default function ReviewCard({ name, role, image, content, rating }: ReviewCardProps) {
    return (
        <div className="bg-muted p-8 rounded-sm border border-white/5 hover:border-primary/30 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white font-heading uppercase">{name}</h4>
                    <p className="text-primary text-sm">{role}</p>
                </div>
            </div>

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                    />
                ))}
            </div>

            <p className="text-gray-300 leading-relaxed italic">"{content}"</p>
        </div>
    );
}
