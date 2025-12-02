import React from 'react';

export default function YogaFlowPage() {
    return (
        <div
            className="min-h-screen text-white pt-24 relative flex items-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <h1 className="text-5xl font-bold font-heading uppercase mb-6 text-primary">Yoga Flow</h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                    Find balance and inner peace with our Yoga Flow sessions.
                    Improve flexibility, core strength, and mental clarity through fluid movements and mindful breathing.
                </p>
            </div>
        </div>
    );
}
