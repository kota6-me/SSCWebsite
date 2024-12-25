"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  grantDiscordAccessToken,
  getDiscordUserData,
} from "../utils/discordLogin";
import type { typeGrantAccess, typeUserData } from "../utils/discordLogin";
let grantAccess: typeGrantAccess = {
  access_token: null,
  token_type: null,
  expires_in: null,
  refresh_token: null,
  scope: null,
  isSuccessfull: false,
  errorDescription: null,
};
let userData: typeUserData = {
  avatar: null,
  banner: null,
  email: null,
  global_name: null,
  id: null,
  username: null,
  isSuccessfull: false,
  errorDescription: null,
};
const searchParams = useSearchParams();
const code = searchParams.get("code") || "";

function CodeWorker() {
  useEffect(() => {
    grantDiscordAccessToken(code).then((res) => {
      grantAccess = res;
      if (grantAccess.isSuccessfull) {
        getDiscordUserData(grantAccess.access_token).then((res) => {
          userData = res;
          if (userData.isSuccessfull) {
            console.log("ログイン成功");
          } else {
            console.log("ログイン失敗");
          }
        });
      } else {
        console.log("ログイン失敗");
      }
    });
  }, [code]);
}

function PrintData() {
  CodeWorker();
  return (
    <ul>
      <li>ユーザー名：{userData.global_name}</li>
      <li>ユーザーID：{userData.username}</li>
      <li>SnowflakeID：{userData.id}</li>
      <li>Email:{userData.email}</li>
      <li>
        Avatar:{`https://cdn.discordapp.com/${userData.id}/${userData.avatar}`}
      </li>
      <li>
        Banner:{`https://cdn.discordapp.com/${userData.id}/${userData.banner}`}
      </li>
    </ul>
  );
}

export default function Redirect() {
  return (
    <Suspense
      fallback={
        <div>
          Loading...
          <br />
          {code}
        </div>
      }
    >
      <PrintData />
    </Suspense>
  );
}
