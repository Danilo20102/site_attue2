import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Building2, FileText, HandHeart, Megaphone, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { institution, officialContentNotice } from "@/lib/site";

const highlights = [
  { icon: HandHeart, title: "Orientação e acolhimento", text: "Um canal institucional para aproximar trabalhadores das informações da categoria." },
  { icon: FileText, title: "Documentos oficiais", text: "Acesso organizado a documentos publicados e validados pelo sindicato." },
  { icon: Users, title: "Participação coletiva", text: "Informações para acompanhar assembleias, comunicados e atividades institucionais." },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-ink text-white">
        <div className="container-page grid min-h-[590px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow text-gold">Representação e informação</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">A voz de quem trabalha na categoria.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">O {institution.name} representa profissionais de {institution.category}, com atuação em {institution.location}. Este espaço reúne informações, serviços e canais de atendimento.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/associacao" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm font-bold text-ink transition hover:bg-amber-400">Conheça a associação <ArrowRight size={17} /></Link>
              <Link to="/sobre" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10">Conheça o sindicato</Link>
            </div>
          </div>
          <div className="relative hidden min-h-[390px] lg:block">
            <div className="absolute right-4 top-8 h-72 w-72 rounded-full border border-gold/40" />
            <div className="absolute bottom-4 left-10 h-64 w-64 rounded-full bg-white/5" />
            <div className="absolute inset-12 flex items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm">
              <div className="text-center"><Building2 className="mx-auto text-gold" size={58} strokeWidth={1.3} /><p className="mt-6 text-2xl font-bold">Representar.<br />Orientar. Aproximar.</p><p className="mt-3 text-sm text-slate-300">Informação institucional em um só lugar.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page -mt-8 relative z-10 grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => <Card key={title} className="border-0"><Icon className="text-gold" size={28} /><h2 className="mt-5 text-lg font-bold text-ink">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></Card>)}
      </section>

      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div><p className="eyebrow">Sobre a instituição</p><h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl">Representatividade começa com informação clara.</h2></div>
          <div><p className="muted-copy">O sindicato é o espaço de representação coletiva dos profissionais. Aqui você encontrará orientações, documentos, notícias e canais de atendimento à medida que os conteúdos oficiais forem disponibilizados.</p><Link to="/sobre" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-gold">Saiba mais sobre o sindicato <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="bg-sand py-20"><div className="container-page"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Informação institucional</p><h2 className="mt-3 text-3xl font-black text-ink">Acompanhe as publicações oficiais</h2></div><Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-bold text-ink">Ver notícias <ArrowRight size={16} /></Link></div><div className="mt-8 grid gap-4 md:grid-cols-3"><Card><Megaphone className="text-gold" /><h3 className="mt-5 font-bold text-ink">Notícias e comunicados</h3><p className="mt-2 text-sm leading-6 text-slate-600">Publicações oficiais serão exibidas nesta área.</p></Card><Card><BookOpen className="text-gold" /><h3 className="mt-5 font-bold text-ink">Documentos</h3><p className="mt-2 text-sm leading-6 text-slate-600">Consulte convenções, editais e documentos quando disponibilizados.</p></Card><Card><Users className="text-gold" /><h3 className="mt-5 font-bold text-ink">Agenda coletiva</h3><p className="mt-2 text-sm leading-6 text-slate-600">Assembleias e eventos oficiais aparecerão aqui.</p></Card></div><p className="mt-6 text-xs text-slate-500">{officialContentNotice}</p></div></section>

      <section className="container-page py-24"><div className="rounded-3xl bg-ink px-7 py-12 text-center text-white sm:px-12"><p className="eyebrow text-gold">Precisa de atendimento?</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black">Estamos preparando um canal simples para você falar com o sindicato.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">Confira os canais institucionais disponíveis e envie sua solicitação quando o recebimento estiver ativado.</p><Link to="/contato" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gold px-5 text-sm font-bold text-ink hover:bg-amber-400">Ir para contato <ArrowRight size={16} /></Link></div></section>
    </>
  );
}
