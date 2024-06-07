import { Suspense } from "react";

import { Avatar } from "@/components/server/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {

  return (
    <main className="flex flex-1 flex-col gap-12 p-16 min-h-screen items-center justify-center">
      <Suspense fallback={<Skeleton className="rounded-md" style={{ width: 250, height: 250 }} />}>
        <Avatar />
      </Suspense>
      <h1 className="text-5xl md:text-7xl font-semibold">Based Avatar<span className="text-blue-600">.</span></h1>
    </main>
  );
}
