import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery | IronForge Gym",
    description: "Take a virtual tour of our state-of-the-art gym facilities.",
};

export default function GalleryPage() {
    return (
        <>
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")' }}
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-4">
                        Our <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Take a look inside our world-class facility.
                    </p>
                </div>
            </section>

            <Gallery />
            <CTABanner />
        </>
    );
}
