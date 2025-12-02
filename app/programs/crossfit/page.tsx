import React from 'react';

export default function CrossFitPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">

                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-5xl font-bold font-heading uppercase mb-6 text-primary">
                        CrossFit
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Push your limits with constantly varied functional movements
                        performed at high intensity.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop"
                        alt="CrossFit workout"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

