import Link from "next/link";

export default function CTABanner() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white font-heading uppercase mb-6">
                    Ready to Transform Your Life?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Join IronForge Gym today and get 50% off your first month. No commitment, cancel anytime.
                </p>
                <Link
                    href="/join"
                    className="inline-block px-10 py-5 bg-white text-primary font-bold uppercase tracking-wider rounded-sm hover:bg-black hover:text-white transition-colors duration-300"
                >
                    Join Now
                </Link>
            </div>
        </section>
    );
}
