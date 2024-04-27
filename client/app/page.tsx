"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <p className="text-3xl mb-2">
          Bito <p className="text-sm font-serif">Subscriber Details</p>
        </p>
      </div>

      <div>
        <div>
          <div className="hidden sm:block">
            <button
              onClick={() => {
                router.push("/table");
              }}
              className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
            >
              Table
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 p-2 m-3 min-h-[300px] min-w-[300px] rounded-md border border-zinc-600"></div>
      </div>
    </main>
  );
}
