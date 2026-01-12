"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    MORPHID
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {/* Adding temporary links for navigation */}
                    <Link href="#program" className="text-sm text-gray-300 hover:text-white transition-colors">EL PROGRAMA</Link>
                    <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">PLANES</Link>
                    <Button size="sm" variant="outline">Unirse</Button>
                </div>
            </div>
        </nav>
    );
}
