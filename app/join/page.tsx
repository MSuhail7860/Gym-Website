import JoinForm from "@/components/JoinForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join Now | IronForge Gym",
    description: "Start your fitness journey today. Sign up for a membership at IronForge Gym.",
};

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative hidden lg:block">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center p-16">
                    <h1 className="text-6xl font-bold text-white font-heading uppercase mb-6 leading-tight">
                        Start Your <br />
                        <span className="text-primary">Journey</span> Today
                    </h1>
                    <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                        Join the IronForge community and get access to world-class equipment, expert trainers, and a supportive environment that will push you to your limits.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 w-full flex items-center justify-center p-8 lg:p-16 bg-black">
                <div className="w-full max-w-xl">
                    <div className="lg:hidden mb-12 text-center">
                        <h1 className="text-4xl font-bold text-white font-heading uppercase mb-4">
                            Start Your <span className="text-primary">Journey</span>
                        </h1>
                        <p className="text-gray-400">
                            Fill out the form below to become a member.
                        </p>
                    </div>

                    <JoinForm />
                </div>
            </div>
        </div>
    );
}
