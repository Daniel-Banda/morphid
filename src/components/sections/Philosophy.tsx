"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
    return (
        <Section className="bg-black text-white" id="program">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                            No es solo una rutina: <br />
                            <span className="text-brand-cream">es un proceso guiado.</span>
                        </h2>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={0.2}>
                        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                            Un programa de entrenamiento mensual diseñado para adaptarse a tu estilo de vida, tu nivel y tus objetivos.
                            Entrena donde quieras (casa, gimnasio o parque) con una estructura clara, seguimiento real y ajustes constantes.
                        </p>
                        <p className="text-lg md:text-xl text-white font-medium border-l-2 border-brand-cream pl-4">
                            Garantizamos progreso, mejora de fuerza, estética corporal y hábitos que te lleven al resultado.
                        </p>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
