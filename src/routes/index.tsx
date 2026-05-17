import { createFileRoute } from "@tanstack/react-router";
import { TodoApp } from "@/components/TodoApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "To-Do List — Organize suas tarefas" },
      {
        name: "description",
        content:
          "Lista de tarefas moderna: adicione, conclua e exclua afazeres com uma interface rápida e bonita.",
      },
      { property: "og:title", content: "To-Do List" },
      {
        property: "og:description",
        content: "Organize seu dia com uma to-do list simples e elegante.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <main className="relative z-10">
        <TodoApp />
      </main>
    </div>
  );
}
