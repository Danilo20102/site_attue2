import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  FileText,
  HandHeart,
  Megaphone,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { institution, officialContentNotice } from "@/lib/site";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Representação forte",
    text: "Atuação coletiva para defender direitos, fortalecer a categoria e ampliar sua participação.",
  },
  {
    icon: HandHeart,
    title: "Acolhimento e orientação",
    text: "Informação clara para ajudar você a tomar decisões com mais segurança no dia a dia profissional.",
  },
  {
    icon: Users,
    title: "Participação coletiva",
    text: "Um espaço para acompanhar as pautas, os comunicados e as decisões importantes da categoria.",
  },
];

const services = [
  {
    icon: Scale,
    title: "Orientação profissional",
    text: "Acesse informações para compreender seus direitos e encontrar os melhores caminhos para cada situação.",
  },
  {
    icon: FileText,
    title: "Documentos e informações",
    text: "Consulte comunicados, publicações e documentos oficiais organizados em um só lugar.",
  },
  {
    icon: MessageCircle,
    title: "Canais de atendimento",
    text: "Fale com o sindicato e encontre os canais institucionais disponíveis para sua solicitação.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Benefícios da associação",
    text: "Conheça as vantagens de fazer parte de uma rede que trabalha pela valorização da categoria.",
  },
];

const news = [
  {
    icon: Megaphone,
    tag: "Comunicados",
    title: "Informações oficiais da Attue",
    text: "Acompanhe os próximos comunicados e posicionamentos institucionais do sindicato.",
  },
  {
    icon: BookOpen,
    tag: "Publicações",
    title: "Conteúdos para a categoria",
    text: "Materiais e orientações serão publicados nesta área conforme forem validados.",
  },
  {
    icon: Users,
    tag: "Participação",
    title: "Agenda e atividades",
    text: "Fique por dentro das assembleias, encontros e iniciativas promovidas pela Attue.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-gold/20" />
        <div className="absolute -bottom-56 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-page relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Sindicato profissional Attue
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Uma categoria mais forte começa com união.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              A {institution.name} representa, orienta e aproxima profissionais, transformando participação coletiva em caminhos mais fortes para toda a categoria.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/associacao"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm font-bold text-ink transition hover:bg-amber-400"
              >
                Quero me associar <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Conheça a Attue
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> Informação confiável</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> Atuação coletiva</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] border border-gold/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-ink">
                    <ShieldCheck size={26} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-white">Attue</p>
                    <p className="text-xs text-slate-400">União e representatividade</p>
                  </div>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="py-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Nosso propósito</p>
                <p className="mt-5 text-3xl font-black leading-tight text-white">Representar com presença. Orientar com clareza.</p>
                <p className="mt-5 leading-7 text-slate-300">Uma atuação próxima, transparente e comprometida com o desenvolvimento da categoria.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-black text-gold">01</p>
                  <p className="mt-1 text-xs text-slate-400">voz coletiva</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-black text-gold">+Forte</p>
                  <p className="mt-1 text-xs text-slate-400">com você</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page relative z-10 -mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="border-0 bg-white shadow-xl shadow-slate-900/5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-ink">
              <Icon className="text-gold" size={25} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-lg font-bold text-ink">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </Card>
        ))}
      </section>

      <section className="container-page py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Sobre a Attue</p>
            <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
              Uma instituição feita para estar ao lado da categoria.
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-slate-600">
              A Attue acredita que representatividade se constrói com escuta, informação e participação. Nosso compromisso é aproximar profissionais das decisões e dos assuntos que impactam sua trajetória.
            </p>
            <Link to="/sobre" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-gold">
              Saiba mais sobre o sindicato <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-sand p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-gold/30" />
            <div className="relative grid gap-8 sm:grid-cols-2">
              <div>
                <span className="text-5xl font-black text-ink">01</span>
                <p className="mt-3 font-bold text-ink">Propósito claro</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Defender interesses e ampliar oportunidades para a categoria.</p>
              </div>
              <div>
                <span className="text-5xl font-black text-ink">02</span>
                <p className="mt-3 font-bold text-ink">Presença próxima</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Criar canais acessíveis de diálogo, orientação e participação.</p>
              </div>
              <div className="sm:col-span-2 sm:border-t sm:border-slate-900/10 sm:pt-8">
                <p className="max-w-xl text-xl font-bold leading-8 text-ink">“Juntos, transformamos informação em participação e participação em conquistas.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Como podemos ajudar</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Serviços e benefícios para fortalecer sua jornada</h2>
            <p className="mt-5 leading-7 text-slate-600">Encontre orientação, informação e canais pensados para tornar sua relação com o sindicato mais simples e próxima.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-white/70 bg-white/80">
                <Icon className="text-gold" size={28} aria-hidden="true" />
                <h3 className="mt-5 font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
          <Link to="/servicos" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-gold">
            Ver todos os serviços <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="container-page py-24 sm:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Informação institucional</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Acompanhe as novidades</h2>
          </div>
          <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-gold">
            Ver todas as informações <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {news.map(({ icon: Icon, tag, title, text }) => (
            <Card key={title} className="group transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand">
                  <Icon className="text-gold" size={23} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">{tag}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              <Link to="/noticias" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-gold">
                Acompanhar <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">{officialContentNotice}</p>
      </section>

      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-gold/20" />
          <div className="absolute -bottom-28 -right-10 h-64 w-64 rounded-full bg-gold/10 blur-2xl" />
          <div className="relative">
            <p className="eyebrow text-gold">Faça parte dessa construção</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">Quando a categoria se une, sua voz alcança mais longe.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">Associe-se à Attue e participe de uma rede que acredita na força do diálogo, da união e da representação.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/associacao" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-sm font-bold text-ink transition hover:bg-amber-400">
                Conheça a associação <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contato" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10">
                Fale conosco <MessageCircle size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
