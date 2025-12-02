import React from 'react';

export default function HiitCardioPage() {
    return (
        <div
            className="min-h-screen text-white pt-24 relative flex items-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <h1 className="text-5xl font-bold font-heading uppercase mb-6 text-primary">HIIT Cardio</h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                    Torch calories and boost your metabolism with our High-Intensity Interval Training classes.
                    Expect a fast-paced, heart-pumping workout that challenges your endurance and pushes your limits.
                </p>
            </div>
        </div>
    );
}