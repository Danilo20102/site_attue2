import { FormEvent, useState } from "react";
import { CheckCircle2, ClipboardList, FileText, UserRound } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { institution } from "@/lib/site";

const steps = [
  { icon: UserRound, title: "Verifique a elegibilidade", text: "[INFORMAR QUEM PODE SE ASSOCIAR.]" },
  { icon: FileText, title: "Separe os documentos", text: "[INFORMAR A DOCUMENTAÇÃO NECESSÁRIA.]" },
  { icon: ClipboardList, title: "Envie seu interesse", text: "O sindicato deve confirmar o procedimento, a análise e os prazos." },
];

export default function Associacao() {
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("O formulário foi validado localmente, mas o recebimento ainda não está ativo porque não há tabela oficial disponível no banco de dados.");
  };

  return <>
    <PageIntro eyebrow="Faça parte" title="Associação sindical" description="Entenda o processo de associação e manifeste seu interesse de forma simples e transparente." />
    <div className="container-page space-y-16 py-16 sm:py-20">
      <section className="grid gap-5 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }) => <Card key={title}><Icon className="text-gold" size={28} /><h2 className="mt-5 text-lg font-bold text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></Card>)}</section>
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Manifestação de interesse</p><h2 className="mt-3 text-3xl font-black text-ink">Quer saber como se associar?</h2><p className="mt-4 leading-7 text-slate-600">Preencha os dados abaixo. O processo de associação e eventual aprovação devem ser confirmados pelo {institution.name}.</p><div className="mt-6 flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />Seus dados não serão enviados enquanto a integração oficial de recebimento não estiver configurada.</div></div><Card><form onSubmit={submit} className="space-y-5" noValidate><div><label htmlFor="association-name" className="mb-2 block text-sm font-bold text-ink">Nome completo</label><Input id="association-name" name="full_name" required placeholder="Digite seu nome completo" /></div><div><label htmlFor="association-email" className="mb-2 block text-sm font-bold text-ink">E-mail</label><Input id="association-email" name="email" type="email" required placeholder="voce@exemplo.com" /></div><div><label htmlFor="association-phone" className="mb-2 block text-sm font-bold text-ink">Telefone</label><Input id="association-phone" name="phone" required placeholder="(00) 00000-0000" /></div><Button type="submit" disabled>Enviar interesse</Button>{status && <p role="status" className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">{status}</p>}</form></Card></section>
    </div>
  </>;
}
