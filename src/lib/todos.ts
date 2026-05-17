// Camada de dados (stub) para integrar com Supabase localmente.
// Substitua o corpo de cada função pelas chamadas reais ao seu Supabase client.
// Exemplo (depois de configurar):
//   import { createClient } from "@supabase/supabase-js";
//   const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
//
// Tabela sugerida (RLS desativado, lista única):
//   create table todos (
//     id uuid primary key default gen_random_uuid(),
//     title text not null,
//     completed boolean not null default false,
//     created_at timestamptz not null default now()
//   );

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
};

export async function fetchTodos(): Promise<Todo[]> {
  // TODO: conectar com Supabase
  // const { data, error } = await supabase
  //   .from("todos")
  //   .select("*")
  //   .order("created_at", { ascending: false });
  // if (error) throw error;
  // return data ?? [];
  return [];
}

export async function createTodo(title: string): Promise<Todo | null> {
  // TODO: conectar com Supabase
  // const { data, error } = await supabase
  //   .from("todos")
  //   .insert({ title })
  //   .select()
  //   .single();
  // if (error) throw error;
  // return data;
  void title;
  return null;
}

export async function toggleTodo(id: string, completed: boolean): Promise<void> {
  // TODO: conectar com Supabase
  // const { error } = await supabase
  //   .from("todos")
  //   .update({ completed })
  //   .eq("id", id);
  // if (error) throw error;
  void id;
  void completed;
}

export async function deleteTodo(id: string): Promise<void> {
  // TODO: conectar com Supabase
  // const { error } = await supabase.from("todos").delete().eq("id", id);
  // if (error) throw error;
  void id;
}
