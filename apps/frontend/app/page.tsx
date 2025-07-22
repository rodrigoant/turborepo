import Link from "next/link";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL!;
  const response = await fetch(api);
  const data = await response.json();

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-slate-50 px-6 py-4 shadow-md">
        <h1 className="mb-4 text-center text-xl"> Turborepo Starter </h1>
        <ul className="list-decimal pl-7">
          <li>
            Frontend:{" "}
            <code className="border border-slate-300 bg-slate-200 px-1">
              apps/frontend/app/page.tsx
            </code>
          </li>
          <li>
            Backend:{" "}
            <code className="border border-slate-300 bg-slate-200 px-1">
              apps/backend/app/route.ts
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          The backend is available at{" "}
          <Link className="underline" href={api}>
            {api}
          </Link>
        </p>
        <p>
          <strong>{data.length}</strong> products are available
        </p>
      </div>
    </div>
  );
}
