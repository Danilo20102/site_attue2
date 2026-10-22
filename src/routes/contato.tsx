import { FormEvent, useState } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contato() {
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("O formulário foi validado localmente, mas não foi enviado. O banco de dados ainda não possui uma tabela oficial para receber mensagens.");
  };

  return <><PageIntro eyebrow="Atendimento" title="Entre em contato" description="Encontre os canais institucionais e envie sua dúvida quando o recebimento estiver habilitado." /><div className="container-page grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] sm:py-20"><div><p className="eyebrow">Canais oficiais</p><h2 className="mt-3 text-3xl font-black text-ink">Estamos aqui para ouvir você.</h2><p className="mt-4 leading-7 text-slate-600">Os dados abaixo são campos reservados para preenchimento com os contatos oficiais do sindicato.</p><div className="mt-8 space-y-5"><div className="flex gap-4"><Phone className="mt-1 text-gold" size={21} /><div><p className="font-bold text-ink">Telefone</p><p className="mt-1 text-sm text-slate-600">[TELEFONE OFICIAL]</p></div></div><div className="flex gap-4"><Mail className="mt-1 text-gold" size={21} /><div><p className="font-bold text-ink">E-mail</p><p className="mt-1 text-sm text-slate-600">[E-MAIL INSTITUCIONAL]</p></div></div><div className="flex gap-4"><MapPin className="mt-1 text-gold" size={21} /><div><p className="font-bold text-ink">Endereço</p><p className="mt-1 text-sm text-slate-600">[ENDEREÇO OFICIAL]</p></div></div><div className="flex gap-4"><Clock3 className="mt-1 text-gold" size={21} /><div><p className="font-bold text-ink">Horário</p><p className="mt-1 text-sm text-slate-600">[HORÁRIO DE ATENDIMENTO]</p></div></div></div></div><Card><form onSubmit={submit} className="space-y-5" noValidate><div><label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-ink">Nome</label><Input id="contact-name" name="full_name" required placeholder="Seu nome completo" /></div><div><label htmlFor="contact-email" className="mb-2 block text-sm font-bold text-ink">E-mail</label><Input id="contact-email" name="email" type="email" required placeholder="voce@exemplo.com" /></div><div><label htmlFor="contact-subject" className="mb-2 block text-sm font-bold text-ink">Assunto</label><Input id="contact-subject" name="subject" required placeholder="Como podemos ajudar?" /></div><div><label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-ink">Mensagem</label><Textarea id="contact-message" name="message" required placeholder="Escreva sua mensagem" /></div><Button type="submit" disabled>Enviar mensagem</Button>{status && <p role="status" className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">{status}</p>}</form></Card></div></>;
}
