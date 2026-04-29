import { Brain, Timer, Layers, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "primary" | "cyan";
};

const features: Feature[] = [
  {
    icon: Brain,
    title: "Resumos com IA",
    description: "Transforme PDFs e vídeos em notas acionáveis em segundos.",
    accent: "primary",
  },
  {
    icon: Timer,
    title: "Foco Total",
    description: "Timer Pomodoro integrado com playlists de Lo-fi para fluxo profundo.",
    accent: "cyan",
  },
  {
    icon: Layers,
    title: "Flashcards Inteligentes",
    description: "Memorização espaçada automática que se adapta ao seu ritmo.",
    accent: "primary",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Tudo que você precisa para <span className="text-gradient">aprender melhor</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ferramentas pensadas para produtividade real — não para você se distrair organizando o app.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description, accent }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card-glass p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div
              className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                accent === "primary"
                  ? "bg-primary/15 text-primary shadow-glow"
                  : "bg-accent/15 text-accent shadow-cyan"
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>

            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </article>
        ))}
      </div>
    </section>
  );
}
