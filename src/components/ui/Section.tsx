import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
    return (
        <section id={id} className={`py-20 md:py-32 px-4 md:px-6 relative overflow-hidden ${className}`}>
            <div className="max-w-6xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
}
