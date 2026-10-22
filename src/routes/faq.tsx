import { PageIntro } from "@/components/SiteLayout";
import { officialContentNotice } from "@/lib/site";

const questions = [
  ["Quem pode se associar?", "[PREENCHER COM A REGRA OFICIAL DE ELEGIBILIDADE.]"],
  ["Como faço para entrar em contato?", "Acesse a página Contato para consultar os canais oficiais disponibilizados pelo sindicato."],
  ["Onde encontro as convenções coletivas?", "Os documentos oficiais serão publicados na biblioteca assim que forem disponibilizados e validados."],
  ["O sindicato oferece orientação jurídica?", "[CONFIRMAR COM A INSTITUIÇÃO. QUESTÕES JURÍDICAS DEPENDEM DE ANÁLISE ESPECÍFICA E NÃO DEVEM SER RESPONDIDAS AUTOMATICAMENTE.]"],
  ["Como acompanho assembleias e eventos?", "A agenda institucional reunirá as atividades publicadas oficialmente pelo sindicato."],
];

export default function FAQ() {
  return <><PageIntro eyebrow="Ajuda" title="Perguntas frequentes" description="Respostas diretas para as dúvidas mais comuns sobre a atuação e os canais do sindicato." /><div className="container-page max-w-4xl space-y-3 py-16 sm:py-20">{questions.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-6 py-5"><summary className="cursor-pointer list-none pr-8 text-base font-bold text-ink marker:hidden">{question}<span className="float-right text-gold transition group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}<p className="pt-5 text-sm text-slate-500">{officialContentNotice}</p></div></>;
}
