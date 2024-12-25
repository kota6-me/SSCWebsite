"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
const searchParams = useSearchParams();
const code = searchParams.get("code") || "";

export default function Redirect() {
  return (
    <div>
      Loading...
      <br />
      <p>{code}</p>
    </div>
  );
}
