let grantAccess: typeGrantAccess = {};
interface typeGrantAccess {
  access_token?: String;
  token_type?: String;
  expires_in?: Number;
  refresh_token?: String;
  scope?: String;
}
let userData: typeUserData = {};
interface typeUserData {
  avatar?: String;
  banner?: String;
  email?: String;
  global_name?: String;
  id?: String;
  username?: String;
}
const grantDiscordAccessToken = function (code: String): typeGrantAccess {
  fetch("https://discordapp.com/api/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: "1319225068592824411",
      client_secret: process.env.DISCORD_CLIENT_SECRET || "",
      grant_type: "authorization_code",
      code: `${code}`,
      redirect_uri: "https://seijoscience.com/login/redirect",
    }),
  }).then((response) => {
    response.json().then((response) => {
      grantAccess = response;
    });
  });
  return grantAccess;
};

const getDiscordUserData = function (token: String): typeUserData {
  fetch("https://discordapp.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    response.json().then((response) => {
      userData = response;
    });
  });
  return userData;
};

export { grantDiscordAccessToken, getDiscordUserData };
export type { typeGrantAccess, typeUserData };
