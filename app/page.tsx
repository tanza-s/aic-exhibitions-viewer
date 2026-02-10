import Exhibitions from "./exhibitions";
import ExhibitionsLoading from "./exhibitions-loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white dark:bg-black">
      <Suspense fallback={<ExhibitionsLoading />}>
        <Exhibitions />
      </Suspense>
    </main>
  );
}
