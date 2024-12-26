"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
function GetCode(): React.ReactElement {
  let searchParams = useSearchParams();
  let code = searchParams.get("code");
  return <p>Code: {code}</p>;
}
export default function Redirect() {
  return (
    <div>
      <h1>Redirect</h1>
      <Suspense fallback={<p>Code Now Loading...</p>}>
        <GetCode />
      </Suspense>
    </div>
  );
}
