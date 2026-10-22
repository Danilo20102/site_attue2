import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const styles = {
    primary: "bg-ink text-white hover:bg-slate-800",
    secondary: "bg-gold text-ink hover:bg-amber-400",
    outline: "border border-slate-300 bg-white text-ink hover:border-ink hover:bg-slate-50",
  };

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
