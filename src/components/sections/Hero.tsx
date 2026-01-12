"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                    alt="Morphid Performance Training"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
                <Reveal>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 uppercase">
                        Morphid <span className="text-outline block md:inline">Performance</span>
                    </h1>
                </Reveal>

                <Reveal delay={0.4}>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        UNETE A NUESTRA COMUNIDAD Y ENTERATE DE NUESTROS ACTIVIDADES CON EL EQUIPO, NOVEDADES Y NUESTRAS REDES SOCIALES.
                    </p>
                </Reveal>

                <Reveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                            Ver Planes
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Contáctanos
                        </Button>
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-cream to-transparent" />
            </motion.div>
        </section>
    );
}
