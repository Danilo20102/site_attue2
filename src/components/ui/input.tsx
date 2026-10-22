import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`min-h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-ink focus:outline-none ${className}`}
      {...props}
    />
  );
}
