"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Plan Básico",
        price: "$450",
        period: "/mes",
        description: "Adaptado para casa, gimnasio o parque. Ideal para iniciar.",
        features: [
            "Plan de entrenamiento personalizado",
            "Rutinas claras y estructuradas",
            "Ajustes constantes",
            "Skills de calistenia",
            "Adaptable a tu equipo disponible"
        ],
        highlight: false,
    },
    {
        name: "Plan Completo",
        price: "$739",
        period: "/mes",
        description: "Entrenamiento + Alimentación + Skills avanzadas. La experiencia total.",
        features: [
            "TODO lo del Plan Básico",
            "Plan de alimentación (Rendimiento, Estética)",
            "Estrategia realista y sostenible",
            "Programa de parado de manos (Handstand)",
            "Revisión de técnica por video"
        ],
        highlight: true,
    },
];

export function Pricing() {
    return (
        <Section className="bg-black text-white" id="pricing">
            <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
                    Planes y <span className="text-outline">Costos</span>
                </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan, index) => (
                    <Reveal key={index} delay={index * 0.2}>
                        <div className={`relative p-8 rounded-3xl border transition-all duration-300 h-full flex flex-col ${plan.highlight
                                ? "bg-zinc-900 border-brand-cream shadow-[0_0_30px_rgba(246,237,221,0.1)] scale-100 md:scale-105"
                                : "bg-black border-zinc-800 hover:border-zinc-600"
                            }`}>
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cream text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
                                <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-bold text-brand-cream">{plan.price}</span>
                                <span className="text-zinc-500 font-medium"> MXN {plan.period}</span>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 mt-0.5 ${plan.highlight ? "text-brand-cream" : "text-zinc-600"}`} />
                                        <span className="text-zinc-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                variant={plan.highlight ? "primary" : "outline"}
                                className="w-full"
                                onClick={() => window.open(`https://wa.me/5213315422872?text=Hola, me interesa el ${plan.name}`, '_blank')}
                            >
                                Elegir Plan
                            </Button>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
