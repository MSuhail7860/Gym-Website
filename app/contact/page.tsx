import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | IronForge Gym",
    description: "Get in touch with us for membership inquiries, class schedules, and more.",
};

export default function ContactPage() {
    return (
        <>
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop")' }}
                    />
                </div>
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-heading uppercase mb-4">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get in touch with us for any questions about memberships, classes, or personal training.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-white font-heading uppercase mb-8">Get In Touch</h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-1">Visit Us</h4>
                                        <p className="text-gray-400">123 Fitness Blvd, Muscle City, GY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-1">Call Us</h4>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-1">Email Us</h4>
                                        <p className="text-gray-400">info@ironforgegym.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-1">Opening Hours</h4>
                                        <p className="text-gray-400">Mon - Fri: 5:00 AM - 11:00 PM</p>
                                        <p className="text-gray-400">Sat - Sun: 6:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="w-full h-[300px] bg-muted rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623163748245!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-muted/30 p-8 md:p-12 rounded-sm border border-white/5">
                            <h2 className="text-3xl font-bold text-white font-heading uppercase mb-8">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
