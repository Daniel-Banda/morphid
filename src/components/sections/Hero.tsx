"use client";

import React from "react";
import Image from "next/image";

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
                    <div className="mt-0">
                        <Image
                            src="/logo.png"
                            alt="Morphid Logo"
                            width={240}
                            height={240}
                            priority
                        />
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
