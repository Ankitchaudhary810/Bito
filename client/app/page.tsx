"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subscriberId, setSubscriberId] = useState("");
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberCountry, setSubscriberCountry] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    toast.loading("Adding..", { id: "1" });
    setLoading(true);
    const subscriptionId = uuidv4();
    const data = {
      subscriptionId,
      subscriberId,
      subscriberName,
      subscriberCountry,
      subscriptionDate: new Date(subscriptionDate),
    };

    const response = await fetch(
      "http://localhost:4000/api/v1/create-subscription",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    console.log(result);
    if (result.success) {
      setLoading(false);
      toast.success("done..", { id: "1" });
      router.push("/table");
    } else {
      setLoading(false);
      toast.error("error..", { id: "1" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <p className="text-3xl mb-2">
          Bito <span className="text-sm font-serif">Subscriber Details</span>
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

        <div className="bg-zinc-900 p-2 m-3 min-h-[300px] min-w-[300px] rounded-md border border-zinc-600">
          <form
            onSubmit={handleSubmit}
            className=" min-h-[300px] min-w-[300px] rounded-md  text-black flex  flex-col "
          >
            <input
              className="p-2 m-2"
              type="text"
              value={subscriberId}
              onChange={(e) => setSubscriberId(e.target.value)}
              placeholder="Subscriber ID"
              required
            />
            <input
              className="p-2 m-2"
              type="text"
              value={subscriberName}
              onChange={(e) => setSubscriberName(e.target.value)}
              placeholder="Subscriber Name"
              required
            />
            <input
              className="p-2 m-2"
              type="text"
              value={subscriberCountry}
              onChange={(e) => setSubscriberCountry(e.target.value)}
              placeholder="Subscriber Country"
              required
            />
            <input
              className="p-2 m-2"
              type="date"
              value={subscriptionDate}
              onChange={(e) => setSubscriptionDate(e.target.value)}
              placeholder="Subscription Date"
              required
            />
            <button
              className="p-2 m-2 bg-gray-200 hover:bg-gray-300 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? "Plese Wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
