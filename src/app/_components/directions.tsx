"use client";

import { api } from "@/trpc/react";
import { useState } from "react";

export default function Directions() {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const query = api.directions.calculateRoute.useQuery({
    sourceAddress: source,
    targetAddress: target,
  });

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div>directions</div>
      <input
        className="block text-black"
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        className="block text-black"
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />

      <div>{JSON.stringify(query.data)}</div>
    </div>
  );
}
