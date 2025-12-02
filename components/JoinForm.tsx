"use client";

import { useForm } from "react-hook-form";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    plan: "Basic" | "Standard" | "Premium";
    goals: string;
};

const plans = [
    { id: "Basic", name: "Basic", price: "$29" },
    { id: "Standard", name: "Standard", price: "$59" },
    { id: "Premium", name: "Premium", price: "$99" }
];

export default function JoinForm() {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            plan: "Standard"
        }
    });

    const selectedPlan = watch("plan");

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert(`Welcome to IronForge, ${data.firstName}! You've selected the ${data.plan} plan.`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Info */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-heading uppercase border-b border-white/10 pb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-white uppercase mb-2">First Name</label>
                        <input
                            {...register("firstName", { required: "First name is required" })}
                            className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="John"
                        />
                        {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-white uppercase mb-2">Last Name</label>
                        <input
                            {...register("lastName", { required: "Last name is required" })}
                            className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Doe"
                        />
                        {errors.lastName && <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>}
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
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-white uppercase mb-2">Phone</label>
                        <input
                            {...register("phone", { required: "Phone is required" })}
                            className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="(555) 123-4567"
                        />
                        {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
                    </div>
                </div>
            </div>

            {/* Plan Selection */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-heading uppercase border-b border-white/10 pb-4">Select Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            onClick={() => setValue("plan", plan.id as any)}
                            className={`cursor-pointer p-6 rounded-sm border transition-all duration-300 ${selectedPlan === plan.id
                                    ? "bg-primary border-primary text-white"
                                    : "bg-muted border-white/10 text-gray-400 hover:border-white/30"
                                }`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold uppercase tracking-wider">{plan.name}</span>
                                {selectedPlan === plan.id && <Check className="w-5 h-5" />}
                            </div>
                            <div className="text-2xl font-bold">{plan.price}<span className="text-sm font-normal opacity-70">/mo</span></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Goals */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-heading uppercase border-b border-white/10 pb-4">Fitness Goals</h3>
                <div>
                    <label className="block text-sm font-bold text-white uppercase mb-2">What do you want to achieve?</label>
                    <textarea
                        {...register("goals")}
                        rows={4}
                        className="w-full bg-muted border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your fitness goals..."
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-white hover:bg-gray-200 text-black font-bold uppercase tracking-wider py-5 rounded-sm transition-colors flex items-center justify-center gap-2 text-lg"
            >
                Complete Registration <ArrowRight className="w-6 h-6" />
            </button>
        </form>
    );
}
