"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <p className="text-3xl mb-2">
          Bito <span className="text-sm font-serif">Subscriber Details</span>
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
        <div className="p-2 m-3">
          <div className="overflow-x-auto rounded-lg border border-zinc-200">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                    Date of Birth
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                    Role
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                    Salary
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $100,000
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $20,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Table;
