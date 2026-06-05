import { supabase } from "@/lib/supabase";

export default async function TestDbPage() {
  const { data, error } = await supabase
    .from("businesses")
    .select("*");

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Database Error</h1>
        <pre className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {JSON.stringify(error, null, 2)}
        </pre>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Database Connected</h1>
      <pre className="mt-4 rounded-lg bg-slate-100 p-4 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
