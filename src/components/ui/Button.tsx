import React from "react";


// Let's create a simple utility for classnames if it doesn't exist, or just inline it for now/create it.
// I'll create a lib/utils.ts next.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wide";

    const variants = {
        primary: "bg-brand-cream text-brand-olive hover:bg-white hover:scale-105",
        secondary: "bg-brand-olive text-brand-cream hover:bg-black hover:text-white border border-transparent",
        outline: "border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-olive",
    };

    const sizes = {
        sm: "h-9 px-6 text-xs",
        md: "h-11 px-8 text-sm",
        lg: "h-14 px-10 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
            {...props}
        />
    );
}
