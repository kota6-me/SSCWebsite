"use client";
import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  grantDiscordAccessToken,
  getDiscordUserData,
} from "../utils/discordLogin";
import type { typeGrantAccess, typeUserData } from "../utils/discordLogin";

async function CodeWorker() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";

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
  grantAccess = await grantDiscordAccessToken(code);
  if (grantAccess.isSuccessfull) {
    userData = await getDiscordUserData(grantAccess.access_token);
    if (userData.isSuccessfull) {
      if (userData.banner) {
        //NitroUserのBanner表示パターン
        return (
          <ul>
            <li>Username: {userData.global_name}</li>
            <li>UserID: {userData.username}</li>
            <li>SnnowflakeID: {userData.id}</li>
            <li>
              Avatar:
              <img
                src={
                  "https://cdn.discordapp.com/" +
                  userData.id +
                  "/" +
                  userData.avatar
                }
                alt="avatar"
              />
            </li>
            <li>
              Banner:
              <img
                src={
                  "https://cdn.discordapp.com/" +
                  userData.id +
                  "/" +
                  userData.banner
                }
                alt="banner"
              />
            </li>
          </ul>
        );
      } else {
        return (
          <ul>
            <li>Username: {userData.global_name}</li>
            <li>UserID: {userData.username}</li>
            <li>SnnowflakeID: {userData.id}</li>
            <li>
              Avatar:
              <img
                src={
                  "https://cdn.discordapp.com/" +
                  userData.id +
                  "/" +
                  userData.avatar
                }
                alt="avatar"
              />
            </li>
          </ul>
        );
      }
    } else {
      return (
        <div>
          <p>ログイン中にエラーが発生しました</p>
          <p>{userData.errorDescription}</p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p>アクセス権限取得中にエラーが発生しました</p>
        <p>{grantAccess.errorDescription}</p>
      </div>
    );
  }
}

export default function Redirect() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodeWorker />
    </Suspense>
  );
}
