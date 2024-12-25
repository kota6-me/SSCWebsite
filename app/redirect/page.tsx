import { useSearchParams } from "next/navigation";
import React from "react";
const searchParams = useSearchParams();
const code = searchParams.get("code") || "";

export default function Redirect() {
  return (
    <div>
      <h1>Redirect</h1>
      <p>Code: {code}</p>
    </div>
  );
}
