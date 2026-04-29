import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudyFlow — Domine seus estudos com IA" },
      {
        name: "description",
        content:
          "Resumos automáticos, cronograma inteligente e Pomodoro em uma só plataforma. Estude menos e retenha mais com o StudyFlow.",
      },
      { property: "og:title", content: "StudyFlow — Domine seus estudos com IA" },
      {
        property: "og:description",
        content: "Plataforma de estudos com IA: resumos, flashcards e foco total.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
