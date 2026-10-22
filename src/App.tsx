import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/routes/index";
import Sobre from "@/routes/sobre";
import Servicos from "@/routes/servicos";
import Associacao from "@/routes/associacao";
import Noticias from "@/routes/noticias";
import Documentos from "@/routes/documentos";
import Agenda from "@/routes/agenda";
import FAQ from "@/routes/faq";
import Contato from "@/routes/contato";
import Privacidade from "@/routes/privacidade";
import Termos from "@/routes/termos";
import NotFound from "@/routes/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/associacao" element={<Associacao />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
