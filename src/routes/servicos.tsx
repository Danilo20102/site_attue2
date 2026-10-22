import { ArrowRight, BriefcaseBusiness, FileCheck2, Headphones, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { PageIntro } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { institution, officialContentNotice } from "@/lib/site";

const services = [
  { icon: Info, title: "Informações da categoria", text: "Orientações institucionais e comunicados sobre temas relevantes para os profissionais." },
  { icon: Headphones, title: "Atendimento sindical", text: "Canal para conhecer as orientações e os procedimentos oficiais do sindicato." },
  { icon: FileCheck2, title: "Documentos oficiais", text: "Consulta organizada a materiais publicados pelo sindicato, quando disponíveis." },
  { icon: BriefcaseBusiness, title: "Orientação profissional", text: "[DESCREVER SOMENTE OS SERVIÇOS EFETIVAMENTE OFERECIDOS PELA INSTITUIÇÃO.]" },
];

export default function Servicos() {
  return <>
    <PageIntro eyebrow="Atendimento" title="Serviços e benefícios" description={`Conheça os serviços confirmados pelo ${institution.name} e encontre o caminho para solicitar informações.`} />
    <div className="container-page py-16 sm:py-20"><div className="grid gap-5 md:grid-cols-2">{services.map(({ icon: Icon, title, text }) => <Card key={title} className="flex flex-col"><Icon className="text-gold" size={30} /><h2 className="mt-5 text-xl font-bold text-ink">{title}</h2><p className="mt-3 flex-1 leading-7 text-slate-600">{text}</p><Link to="/contato" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-gold">Solicitar informações <ArrowRight size={16} /></Link></Card>)}</div><div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Importante:</strong> nenhum benefício, desconto ou serviço adicional é considerado confirmado sem validação institucional. {officialContentNotice}</div></div>
  </>;
}
