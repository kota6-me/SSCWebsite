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
const grantDiscordAccessToken = async function (
  code: String
): Promise<typeGrantAccess> {
  /*const params = new URL(url).search;
  let paramsPrefix = new RegExp(/^[?&]$/g);
  const paramsArr = params.split(paramsPrefix);
  for (let i = 0; i < paramsArr.length; i++) {
    if (paramsArr[i].includes("code")) {
      code = paramsArr[i].split("=")[1];
    }
  }*/
  await fetch("https://discordapp.com/api/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: "1319225068592824411",
      client_secret: process.env.DISCORD_CLIENT_SECRET || "",
      grant_type: "authorization_code",
      code: `${code}`,
      redirect_uri: "https://seijoscience.com/redirect",
    }),
  }).then((response) => {
    response.json().then((response) => {
      grantAccess = response;
    });
  });
  return grantAccess as typeGrantAccess;
};

const getDiscordUserData = async function (
  token: String
): Promise<typeUserData> {
  await fetch("https://discordapp.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    response.json().then((response) => {
      userData = response;
    });
  });
  return userData as typeUserData;
};

export { grantDiscordAccessToken, getDiscordUserData };
export type { typeGrantAccess, typeUserData };
