import { Link } from "react-router-dom";
import { ArrowRight, Check, GraduationCap, HandHeart, Scale, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { EmptyState, PageIntro } from "@/components/SiteLayout";
import { institution, officialContentNotice } from "@/lib/site";

const benefits = [
  {
    icon: Scale,
    title: "Orientação profissional",
    text: "Conteúdo provisório: o suporte e a orientação oferecidos aos associados serão detalhados após validação oficial.",
  },
  {
    icon: HandHeart,
    title: "Acolhimento ao associado",
    text: "Conteúdo provisório: os canais de acolhimento e atendimento serão publicados com as informações oficiais.",
  },
  {
    icon: GraduationCap,
    title: "Qualificação e conteúdo",
    text: "Conteúdo provisório: materiais, encontros e ações de formação serão divulgados nesta área.",
  },
  {
    icon: Stethoscope,
    title: "Saúde e bem-estar",
    text: "Conteúdo provisório: eventuais convênios e programas de bem-estar dependem de confirmação do sindicato.",
  },
  {
    icon: ShieldCheck,
    title: "Representação coletiva",
    text: "A representação da categoria é a base da atuação da Attue, com diálogo e acompanhamento das pautas profissionais.",
  },
  {
    icon: Users,
    title: "Rede de associados",
    text: "Conteúdo provisório: as formas de participação e integração entre associados serão informadas oficialmente.",
  },
];

const advantages = [
  "Participar de uma representação coletiva da categoria.",
  "Acompanhar comunicados e posicionamentos institucionais.",
  "Ter acesso a informações e orientações sobre a vida profissional.",
];

export default function Beneficios() {
  return (
    <>
      <PageIntro
        eyebrow="Benefícios"
        title="Benefícios de fazer parte da Attue"
        description={`A associação à ${institution.name} é um caminho para fortalecer a representação da categoria e ter acesso a orientações e informações institucionais.`}
      />

      <section className="container-page py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Frentes de benefícios</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">O que a associação representa</h2>
          <p className="mt-5 leading-7 text-slate-600">
            A estrutura abaixo apresenta as frentes previstas para os associados. Cada item será atualizado quando o sindicato
            disponibilizar as informações oficiais.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand">
                <Icon className="text-gold" size={25} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Vantagens da associação</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Por que se associar</h2>
            <ul className="mt-7 space-y-4">
              {advantages.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-700">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/associacao"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Quero me associar <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <EmptyState
            title="Benefícios em validação"
            description="Os benefícios confirmados e as condições de participação serão publicados nesta página após validação e disponibilização das informações oficiais pelo sindicato."
          />
        </div>
      </section>

      <section className="container-page pb-24 pt-16">
        <p className="text-xs text-slate-500">{officialContentNotice}</p>
      </section>
    </>
  );
}
