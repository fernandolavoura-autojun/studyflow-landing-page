import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  ListTodo,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import {
  type Todo,
  createTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from "@/lib/todos";

type Filter = "all" | "active" | "done";

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await fetchTodos();
        if (active) setTodos(data);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "done") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const remaining = todos.filter((t) => !t.completed).length;
  const completedCount = todos.length - remaining;

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const value = title.trim();
    if (!value || adding) return;
    setAdding(true);

    // Otimista: cria localmente, depois persiste (quando o Supabase estiver plugado).
    const optimistic: Todo = {
      id: `local-${crypto.randomUUID()}`,
      title: value,
      completed: false,
      created_at: new Date().toISOString(),
    };
    setTodos((prev) => [optimistic, ...prev]);
    setTitle("");

    try {
      const saved = await createTodo(value);
      if (saved) {
        setTodos((prev) => prev.map((t) => (t.id === optimistic.id ? saved : t)));
      }
    } finally {
      setAdding(false);
    }
  }

  async function handleToggle(todo: Todo) {
    const next = !todo.completed;
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, completed: next } : t)),
    );
    try {
      await toggleTodo(todo.id, next);
    } catch {
      // rollback se falhar
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, completed: !next } : t)),
      );
    }
  }

  async function handleDelete(todo: Todo) {
    const snapshot = todos;
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    try {
      await deleteTodo(todo.id);
    } catch {
      setTodos(snapshot);
    }
  }

  return (
    <section className="relative mx-auto w-full max-w-2xl px-4 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card-glass px-3 py-1 text-xs font-medium text-muted-foreground bg-card-glass">
          <Sparkles className="size-3.5 text-accent" />
          Sua lista, sempre à mão
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient">To-Do</span> List
        </h1>
        <p className="mt-3 max-w-md text-balance text-sm text-muted-foreground sm:text-base">
          Organize seu dia com uma interface simples, rápida e bonita.
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-border bg-card-glass p-5 shadow-glow sm:p-7">
        {/* Form */}
        <form onSubmit={handleAdd} className="flex items-center gap-2">
          <div className="relative flex-1">
            <ListTodo className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="O que você precisa fazer?"
              maxLength={200}
              className="h-12 w-full rounded-xl border border-border bg-background/60 pl-10 pr-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            disabled={!title.trim() || adding}
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {adding ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Plus className="size-4" />
            )}
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </form>

        {/* Filters + stats */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex rounded-lg border border-border bg-background/40 p-1 text-xs">
            {(
              [
                { id: "all", label: "Todas" },
                { id: "active", label: "Ativas" },
                { id: "done", label: "Concluídas" },
              ] as { id: Filter; label: string }[]
            ).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-md px-3 py-1.5 font-medium transition ${
                  filter === f.id
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{remaining}</span>{" "}
            pendente{remaining === 1 ? "" : "s"} ·{" "}
            <span className="font-semibold text-foreground">
              {completedCount}
            </span>{" "}
            feita{completedCount === 1 ? "" : "s"}
          </div>
        </div>

        {/* List */}
        <ul className="mt-5 space-y-2">
          {loading ? (
            <li className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Carregando...
            </li>
          ) : filtered.length === 0 ? (
            <li className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ListTodo className="size-5" />
              </div>
              <p className="text-sm font-medium text-foreground">
                {filter === "done"
                  ? "Nenhuma tarefa concluída ainda"
                  : filter === "active"
                    ? "Nada pendente. Aproveite! ✨"
                    : "Sua lista está vazia"}
              </p>
              <p className="max-w-xs text-xs text-muted-foreground">
                Conecte seu Supabase em <code>src/lib/todos.ts</code> para
                persistir suas tarefas.
              </p>
            </li>
          ) : (
            filtered.map((todo) => (
              <li
                key={todo.id}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3 py-3 transition hover:border-primary/40 hover:bg-background/60"
              >
                <button
                  onClick={() => handleToggle(todo)}
                  aria-label={
                    todo.completed
                      ? "Marcar como não concluída"
                      : "Marcar como concluída"
                  }
                  className="shrink-0 text-muted-foreground transition hover:text-primary"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="size-5 text-accent" />
                  ) : (
                    <Circle className="size-5" />
                  )}
                </button>
                <span
                  className={`flex-1 text-sm transition ${
                    todo.completed
                      ? "text-muted-foreground line-through"
                      : "text-foreground"
                  }`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => handleDelete(todo)}
                  aria-label="Excluir tarefa"
                  className="shrink-0 rounded-md p-2 text-muted-foreground opacity-0 transition hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        💡 As funções <code>fetchTodos</code>, <code>createTodo</code>,{" "}
        <code>toggleTodo</code> e <code>deleteTodo</code> estão prontas em{" "}
        <code>src/lib/todos.ts</code> — basta plugar seu Supabase.
      </p>
    </section>
  );
}
