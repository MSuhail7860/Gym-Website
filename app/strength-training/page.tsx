import React from 'react';

export default function StrengthTrainingPage() {
    return (
        <div
            className="min-h-screen text-white pt-24 relative flex items-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed' // Optional: Parallax effect
            }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <h1 className="text-5xl font-bold font-heading uppercase mb-6 text-primary">Strength Training</h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                    Build muscle, increase power, and transform your physique with our comprehensive strength training programs.
                    Our expert coaches will guide you through proper form and technique to ensure safe and effective progression.
                </p>
            </div>
        </div>
    );
}
