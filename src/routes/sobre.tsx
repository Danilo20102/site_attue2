import { Building2, Eye, Flag, Scale } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { institution, officialContentNotice } from "@/lib/site";

const pillars = [
  { icon: Flag, title: "Missão", text: "[PREENCHER COM A MISSÃO OFICIAL DO SINDICATO]" },
  { icon: Eye, title: "Visão", text: "[PREENCHER COM A VISÃO OFICIAL DO SINDICATO]" },
  { icon: Scale, title: "Valores", text: "[PREENCHER COM OS VALORES INSTITUCIONAIS]" },
];

export default function Sobre() {
  return <>
    <PageIntro eyebrow="Institucional" title="Conheça o sindicato" description={`Informações sobre a trajetória, a missão e a atuação do ${institution.name}.`} />
    <div className="container-page space-y-20 py-16 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Nossa trajetória</p><h2 className="mt-3 text-3xl font-black text-ink">Uma história construída coletivamente.</h2></div><div className="space-y-5 text-slate-600"><p className="leading-8">[PREENCHER COM A HISTÓRIA OFICIAL DO SINDICATO, SUA FUNDAÇÃO E PRINCIPAIS MOMENTOS.]</p><p className="leading-8">A categoria representada é {institution.category}, com atuação em {institution.location}.</p><p className="text-sm text-slate-500">{officialContentNotice}</p></div></section>
      <section className="grid gap-5 md:grid-cols-3">{pillars.map(({ icon: Icon, title, text }) => <Card key={title}><Icon className="text-gold" size={28} /><h2 className="mt-5 text-xl font-bold text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></Card>)}</section>
      <section className="grid gap-6 lg:grid-cols-2"><Card><Building2 className="text-gold" size={28} /><h2 className="mt-5 text-xl font-bold text-ink">Área de atuação</h2><p className="mt-3 leading-7 text-slate-600">Categoria: {institution.category}<br />Localização: {institution.location}</p></Card><Card><h2 className="text-xl font-bold text-ink">Diretoria e representantes</h2><p className="mt-3 leading-7 text-slate-600">[PREENCHER COM OS NOMES, CARGOS E MANDATOS DOS REPRESENTANTES OFICIAIS.]</p></Card></section>
    </div>
  </>;
}
