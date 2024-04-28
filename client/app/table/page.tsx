"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Subscription {
  id: string;
  subscriberId: string;
  subscriberName: string;
  subscriberCountry: string;
  subscriptionDate: string;
}

const Table = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const response = await fetch(
        "http://localhost:4000/api/v1/get-all-subscription-list",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await response.json();
      setSubscriptions(result);
      console.log(result);
      setisLoading(false);
    };
    fetchData();
  }, []);
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
          {isLoading ? (
            <>
              <p className="text-zinc-700 text-xl">Loading...</p>
            </>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-zinc-200">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                      subscriptionId
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                      subscriberId
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                      subscriberCountry
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                      subscriberName
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-300 bg-zinc-900">
                      subscriptionDate
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {subscriptions.map((sub) => (
                    <tr key={sub?.id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {sub.id}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {sub.subscriberId}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {sub.subscriberCountry}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {sub.subscriberName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {new Date(sub.subscriptionDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Table;
