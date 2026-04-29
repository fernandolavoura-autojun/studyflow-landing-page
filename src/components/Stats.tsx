import { TrendingUp, Clock, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+70%", label: "de retenção de conteúdo" },
  { icon: Clock, value: "5h", label: "economizadas por semana" },
  { icon: Users, value: "50k+", label: "estudantes ativos" },
  { icon: BookOpen, value: "1M+", label: "resumos gerados" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-10 backdrop-blur md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Resultados que <span className="text-gradient">falam por si</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Métricas reais reportadas por usuários do StudyFlow no último semestre.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-bold tracking-tight md:text-5xl text-gradient">
                  {value}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
