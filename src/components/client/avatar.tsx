"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const Avatar = () => {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  const random = Math.random().toString(36).substring(7);

  return (
    <div
      style={{
        width: 250,
        height: 250,
        position: "relative",
      }}
    >
      <Image
        src={`/${random}?size=250`}
        alt={'Avatar'}
        width={250}
        height={250}
        style={{ visibility }}
        onError={() => setReveal(true)}
        onLoadingComplete={() => setReveal(true)}
      />
      <span
        style={{
          display: loader,
          position: "absolute",
          top: 0,
        }}
      >
        <Skeleton className="rounded-md" style={{ width: 250, height: 250 }} />
      </span>
    </div>
  );
};
