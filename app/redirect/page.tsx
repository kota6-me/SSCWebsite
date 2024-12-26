"use client";
import { redirect, useSearchParams } from "next/navigation";
import discordLogin from "../utils/discordLogin";

export default function Redirect() {
  let searchParams = useSearchParams();
  let code = searchParams.get("code");
  discordLogin(code).then((userData) => {
    if (userData.isSuccessfull) {
      redirect("/dashboard");
    } else {
      console.error(userData.errorDescription);
      redirect("/error");
    }
  });
  return (
    <div>
      <h1>Now Redirecting...</h1>
    </div>
  );
}
