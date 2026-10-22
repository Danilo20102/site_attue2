import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import { institution, navItems } from "@/lib/site";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-slate-200 bg-sand py-16 sm:py-20">
      <div className="container-page max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-ink">
        <ShieldCheck size={22} aria-hidden="true" />
      </div>
      <h2 className="mt-5 text-xl font-bold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fbfaf7]/95 backdrop-blur">
        <div className="container-page flex min-h-[76px] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
              <ShieldCheck size={25} aria-hidden="true" />
            </span>
            <span className="max-w-[180px] text-sm font-black leading-tight text-ink sm:max-w-none sm:text-base">{institution.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-semibold transition ${isActive ? "text-ink" : "text-slate-600 hover:text-ink"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contato" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-bold text-white transition hover:bg-slate-800">
              Fale conosco <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <button className="rounded-lg p-2 text-ink lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Navegação móvel">
            <div className="container-page flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-sand hover:text-ink">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-slate-200 bg-ink text-white">
        <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold"><ShieldCheck size={22} /></span>
              <span className="font-bold">{institution.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{institution.description}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Acesso rápido</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/sobre" className="hover:text-white">Sobre o sindicato</Link>
              <Link to="/associacao" className="hover:text-white">Quero me associar</Link>
              <Link to="/documentos" className="hover:text-white">Documentos</Link>
              <Link to="/faq" className="hover:text-white">Perguntas frequentes</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Atendimento</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>[TELEFONE OFICIAL]</p>
              <p>[E-MAIL INSTITUCIONAL]</p>
              <p>[HORÁRIO DE ATENDIMENTO]</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {institution.name}. Todos os direitos reservados.</span>
            <div className="flex gap-4"><Link to="/privacidade" className="hover:text-white">Privacidade</Link><Link to="/termos" className="hover:text-white">Termos de uso</Link></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
