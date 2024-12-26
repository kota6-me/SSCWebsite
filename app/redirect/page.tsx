"use client";
import { useSearchParams } from "next/navigation";
export default function Redirect() {
  let searchParams = useSearchParams();
  let code = searchParams.get("code");
  return (
    <div>
      <h1>Redirect</h1>
      <p>Code: {code}</p>
    </div>
  );
}
