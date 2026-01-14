"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <Section className="bg-brand-olive text-white flex flex-col items-center justify-center text-center" id="contact">
            <Reveal width="100%">
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase text-white">
                        Empieza tu <span className="text-brand-cream">Transformación</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium">
                        ¿Tienes dudas o quieres evaluar tu caso específico? Escríbenos directamente.
                    </p>

                    <Button
                        size="lg"
                        className="bg-[#25D366] text-black hover:bg-[#128C7E] border-none text-xl px-12 h-16 shadow-lg shadow-green-900/20"
                        onClick={() => window.open("https://wa.me/5213315422872", '_blank')}
                    >
                        <MessageCircle className="w-6 h-6 mr-3" />
                        +INFO A WHATSAPP
                    </Button>
                    <p className="mt-4 text-sm text-brand-cream/60 font-bold tracking-wider">
                        33 1542 2872
                    </p>
                </div>
            </Reveal>
        </Section>
    );
}
