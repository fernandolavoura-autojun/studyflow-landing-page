import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Como o StudyFlow gera os resumos?",
    a: "Você envia um PDF, link de vídeo ou texto. Nossa IA identifica conceitos-chave, resume com linguagem clara e sugere flashcards automaticamente.",
  },
  {
    q: "O cronograma se adapta à minha rotina?",
    a: "Sim. Indique seus horários disponíveis e prazos — o algoritmo distribui revisões usando repetição espaçada para maximizar retenção.",
  },
  {
    q: "Posso usar no celular?",
    a: "Sim, a plataforma é totalmente responsiva e funciona offline para leitura de resumos e revisão de flashcards.",
  },
  {
    q: "Existe plano gratuito?",
    a: "Sim. O plano gratuito inclui Pomodoro, flashcards básicos e até 5 resumos por mês. Planos pagos liberam IA ilimitada.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Todos os documentos são criptografados em trânsito e em repouso. Você pode excluir seu material a qualquer momento.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Perguntas <span className="text-gradient">frequentes</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tudo o que você precisa saber antes de começar.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-card/60"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.q}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
