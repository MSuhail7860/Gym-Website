import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Dumbbell } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-[-45deg] transition-transform duration-300" />
                            <span className="text-2xl font-bold font-heading tracking-wider text-white">
                                IRON<span className="text-primary">FORGE</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            IronForge Gym is dedicated to helping you achieve your fitness goals with world-class equipment, expert trainers, and a supportive community.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 font-heading tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Trainers", href: "/trainers" },
                                { name: "Classes & Programs", href: "/programs" },
                                { name: "Membership Plans", href: "/membership" },
                                { name: "Success Stories", href: "/testimonials" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 font-heading tracking-wide">Programs</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Bodybuilding", href: "/strength-training" },
                                { name: "CrossFit", href: "/programs/crossfit" },
                                { name: "Yoga & Pilates", href: "/yoga-flow" },
                                { name: "Cardio Fitness", href: "/hiit-cardio" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 font-heading tracking-wide">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-400">123 Fitness Blvd, Muscle City, GY 10001</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-gray-400">info@ironforgegym.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} IronForge Gym. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
