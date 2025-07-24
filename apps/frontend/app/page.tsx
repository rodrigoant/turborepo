import Link from "next/link";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL!;
  const response = await fetch(api);
  const data = await response.json();

  return (
    <div className="grid h-dvh place-items-center">
      <main className="flex flex-col gap-8 p-4">
        <h1 className="text-4xl font-semibold"> Next.js + Turborepo </h1>
        <ol className="list-inside list-decimal space-y-2 font-mono">
          <li>
            Edit the frontend app:{" "}
            <code className="rounded bg-neutral-800 px-1">
              apps/frontend/app/page.tsx
            </code>
          </li>
          <li>
            Edit the backend app:{" "}
            <code className="rounded bg-neutral-800 px-1">
              apps/backend/app/route.ts
            </code>
          </li>
          <li>
            The API is available at{" "}
            <Link className="underline" href={api}>
              <code className="rounded bg-neutral-800 px-1">{api}</code>
            </Link>
          </li>
          <li>API response: {data.length} products are available</li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
