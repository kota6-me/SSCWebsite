"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
export default function Redirect() {
  let searchParams = useSearchParams();
  let code = searchParams.get("code");
  return (
    <div>
      <h1>Redirect</h1>
      <Suspense fallback={<p>Code Now Loading...</p>}>
        <p>{code}</p>
      </Suspense>
    </div>
  );
}
