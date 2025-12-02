import { ArrowRight } from "lucide-react";

interface BeforeAfterProps {
    name: string;
    duration: string;
    result: string;
    beforeImage: string;
    afterImage: string;
}

export default function BeforeAfter({ name, duration, result, beforeImage, afterImage }: BeforeAfterProps) {
    return (
        <div className="bg-black border border-white/10 rounded-sm overflow-hidden">
            <div className="grid grid-cols-2 h-[300px]">
                <div className="relative group">
                    <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold uppercase py-1 px-3 rounded-sm">Before</div>
                </div>
                <div className="relative group">
                    <img src={afterImage} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase py-1 px-3 rounded-sm">After</div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="text-xl font-bold text-white font-heading uppercase">{name}</h4>
                        <p className="text-gray-400 text-sm">{duration}</p>
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded-sm">
                        <span className="text-primary font-bold text-sm">{result}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
