"use client";
import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  grantDiscordAccessToken,
  getDiscordUserData,
} from "../utils/discordLogin";
import type { typeGrantAccess, typeUserData } from "../utils/discordLogin";

export function CodeWorker() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [userData, setUserData] = React.useState<typeUserData | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      let grantAccess: typeGrantAccess;
      try {
        grantAccess = await grantDiscordAccessToken(code || "");
      } catch (e) {
        return;
      }

      try {
        const userData = await getDiscordUserData(
          grantAccess.access_token || ""
        );
        setUserData(userData);
      } catch (e) {}
    }

    fetchData();
  }, [code]);
  return (
    <ul>
      <li>Username: {userData.global_name}</li>
      <li>UserID: {userData.username}</li>
      <li>SnnowflakeID: {userData.id}</li>
      <li>
        Avatar:
        <img
          src={
            "https://cdn.discordapp.com/" + userData.id + "/" + userData.avatar
          }
          alt="avatar"
        />
      </li>
      <li>
        Banner:
        <img
          src={
            "https://cdn.discordapp.com/" + userData.id + "/" + userData.banner
          }
          alt="banner"
        />
      </li>
    </ul>
  );
}

export default function Redirect() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodeWorker />
    </Suspense>
  );
}
