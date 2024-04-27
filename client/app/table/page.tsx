"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <p className="text-3xl mb-2">
          Bito <p className="text-sm font-serif">Subscriber Details</p>
        </p>
      </div>

      <div>
        <div className=" ">
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200 "
          >
            Back
          </button>
        </div>
        <div className="bg-zinc-900 p-2 m-3 min-h-[300px] min-w-[300px] rounded-md border border-zinc-600"></div>
      </div>
    </main>
  );
};

export default Table;
