"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Smartphone, MessageCircle, Video, Settings } from "lucide-react";

const features = [
    {
        icon: <MessageCircle className="w-8 h-8 text-brand-olive" />,
        title: "SEGUIMIENTO 24/7",
        description: "Acompañamiento constante vía WhatsApp, para resolver dudas, ajustes rápidos y mantenerte enfocado.",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-brand-olive" />,
        title: "APP MÓVIL",
        description: "Acceso a una app para control de medidas, fotos de progreso, evidencias y calendario. Todo tu proceso en un solo lugar.",
    },
    {
        icon: <Video className="w-8 h-8 text-brand-olive" />,
        title: "VIDEOLLAMADAS 1/1",
        description: "Revisar progreso, ajustar si hay estancamiento, resolver dolores y adaptar el plan a situaciones personales.",
    },
    {
        icon: <Settings className="w-8 h-8 text-brand-olive" />,
        title: "ADAPTABLE",
        description: "Para cualquier tipo de persona, situación y lugar de entrenamiento (casa, gimnasio o parque).",
    },
];

export function Features() {
    return (
        <Section className="bg-zinc-900 text-white">
            <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 uppercase">
                    ¿QUÉ INCLUYE EL <span className="text-outline">PROGRAMA?</span>
                </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                        <div className="bg-brand-cream p-8 rounded-2xl h-full text-black hover:scale-105 transition-transform duration-300">
                            <div className="mb-6 p-3 bg-white/50 rounded-full w-fit backdrop-blur-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-gray-800 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
