import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 text-center md:pt-32 md:pb-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          IA para estudantes que querem mais foco
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Domine seus estudos
          <br />
          com <span className="text-gradient">IA</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Resumos automáticos, cronograma inteligente e técnica Pomodoro reunidos
          em uma só plataforma — feita para você reter mais e estudar menos.
        </p>

        <div id="cta" className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Começar Agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center rounded-full border border-border bg-card/40 px-7 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            Ver funcionalidades
          </a>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Grátis para começar · Sem cartão de crédito
        </p>
      </div>
    </section>
  );
}
