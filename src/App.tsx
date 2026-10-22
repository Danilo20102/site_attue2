import { useState } from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    number: "01",
    title: "Clareza para começar",
    description: "Organize a ideia principal e transforme intenção em um próximo passo possível.",
  },
  {
    number: "02",
    title: "Ritmo para continuar",
    description: "Uma experiência simples para manter o foco no que realmente precisa acontecer.",
  },
  {
    number: "03",
    title: "Presença para marcar",
    description: "Cada detalhe pensado para criar conexões mais fortes e experiências memoráveis.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            className="text-left text-xl font-extrabold tracking-[-0.08em] text-primary"
            onClick={() => scrollToSection("inicio")}
            aria-label="Voltar ao início"
          >
            attue<span className="text-accent">.</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <button
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => scrollToSection("inicio")}
            >
              Início
            </button>
            <button
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => scrollToSection("recursos")}
            >
              O que fazemos
            </button>
            <button
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </button>
          </nav>

          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => scrollToSection("contato")}
          >
            Vamos conversar
          </Button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-primary/10 bg-background px-6 py-5 md:hidden" aria-label="Menu mobile">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <button className="text-left text-sm font-medium" onClick={() => scrollToSection("inicio")}>
                Início
              </button>
              <button className="text-left text-sm font-medium" onClick={() => scrollToSection("recursos")}>
                O que fazemos
              </button>
              <button className="text-left text-sm font-medium" onClick={() => scrollToSection("contato")}>
                Contato
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-secondary/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Ideias que ganham forma
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.07em] text-primary sm:text-6xl lg:text-8xl">
                Faça espaço para o que importa<span className="text-accent">.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Criamos experiências com intenção, beleza e simplicidade para transformar boas ideias em algo que as pessoas sentem.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" onClick={() => scrollToSection("contato")}>
                  Começar uma conversa <span className="ml-3 text-lg">↗</span>
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("recursos")}>
                  Conhecer mais
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative aspect-[0.9] overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-2xl shadow-primary/10 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono-display text-xs uppercase tracking-[0.25em] text-primary-foreground/60">Atue com intenção</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg text-accent-foreground">✳</span>
                </div>

                <div className="absolute inset-x-7 bottom-8 sm:inset-x-10 sm:bottom-10">
                  <div className="mb-5 h-px w-full bg-primary-foreground/20" />
                  <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
                    Menos ruído.
                    <br />
                    Mais sentido.
                  </p>
                  <div className="mt-8 flex items-center justify-between text-xs text-primary-foreground/60">
                    <span className="font-mono-display">01 / 03</span>
                    <span>attue studio</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-5 flex items-center gap-3 rounded-2xl border border-primary/10 bg-background px-4 py-3 shadow-xl sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">↗</span>
                <div>
                  <p className="text-xs font-semibold text-primary">Feito para avançar</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">um passo de cada vez</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="border-y border-primary/10 bg-secondary/35">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 font-mono-display text-xs uppercase tracking-[0.22em] text-accent">O nosso jeito</p>
                <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.06em] text-primary sm:text-5xl">
                  Simples no processo.
                  <br />
                  Profundo no resultado.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Um olhar cuidadoso para construir soluções que fazem sentido hoje e continuam relevantes amanhã.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-primary/10 bg-primary/10 md:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.number} className="bg-background p-7 transition-colors hover:bg-background/70 lg:p-9">
                  <span className="font-mono-display text-xs text-accent">{feature.number}</span>
                  <h3 className="mt-16 text-xl font-bold tracking-[-0.04em] text-primary">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-14 text-accent-foreground sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[1.5rem] border-accent-foreground/10" />
            <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border-[1.5rem] border-accent-foreground/10" />
            <div className="relative max-w-2xl">
              <p className="mb-5 font-mono-display text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Pronto para começar?</p>
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.06em] sm:text-6xl">
                Toda grande ideia começa com uma conversa.
              </h2>
              <Button
                variant="primary"
                size="lg"
                className="mt-9 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.alert("Em breve, este espaço poderá receber o seu contato.")}
              >
                Falar com a Attue <span className="ml-3 text-lg">↗</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="font-bold tracking-[-0.06em] text-primary">attue<span className="text-accent">.</span></span>
          <span>Feito com intenção para ideias que importam.</span>
          <span className="font-mono-display text-xs">© 2025</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
