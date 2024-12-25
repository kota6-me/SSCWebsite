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
    ></Suspense>
  );
}
