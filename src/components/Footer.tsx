import { GraduationCap, Twitter, Instagram, Github, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg">StudyFlow</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              A plataforma de estudos com IA feita para estudantes que valorizam foco e resultado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-2">
            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                aria-label="Rede social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} StudyFlow. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
