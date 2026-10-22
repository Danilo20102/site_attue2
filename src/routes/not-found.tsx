import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <div className="container-page flex min-h-[65vh] flex-col items-center justify-center py-20 text-center"><p className="eyebrow">Erro 404</p><h1 className="mt-4 text-5xl font-black text-ink">Página não encontrada</h1><p className="mt-5 max-w-md leading-7 text-slate-600">O endereço acessado não corresponde a uma página disponível neste site.</p><Link to="/" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-bold text-white hover:bg-slate-800"><ArrowLeft size={16} />Voltar ao início</Link></div>;
}
