"use client";

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Handle form submission
        alert("Message sent! We'll get back to you soon.");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-white uppercase mb-2">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Name"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-bold text-white uppercase mb-2">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Email"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-white uppercase mb-2">Subject</label>
                <input
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can we help?"
                />
                {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
            </div>

            <div>
                <label className="block text-sm font-bold text-white uppercase mb-2">Message</label>
                <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={6}
                    className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your Message"
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-red-600 text-white font-bold uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
            >
                Send Message <Send className="w-5 h-5" />
            </button>
        </form>
    );
}
