let grantAccess: typeGrantAccess = {
  access_token: null,
  token_type: null,
  expires_in: null,
  refresh_token: null,
  scope: null,
  isSuccessfull: false,
  errorDescription: null,
};
interface typeGrantAccess {
  access_token: String | null;
  token_type: String | null;
  expires_in: Number | null;
  refresh_token: String | null;
  scope: String | null;
  isSuccessfull: Boolean;
  errorDescription: String | null;
}
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
interface typeUserData {
  avatar: String | null;
  banner: String | null;
  email: String | null;
  global_name: String | null;
  id: String;
  username: String;
  isSuccessfull: Boolean;
  errorDescription: String | null;
}
const grantDiscordAccessToken = async function (
  code: String
): Promise<typeGrantAccess> {
  if (!process.env.DISCORD_CLIENT_SECRET) {
    return (grantAccess = {
      access_token: null,
      token_type: null,
      expires_in: null,
      refresh_token: null,
      scope: null,
      isSuccessfull: false,
      errorDescription: "DISCORD_CLIENT_SECRETが設定されていません",
    });
  } else if (code === "") {
    return (grantAccess = {
      access_token: null,
      token_type: null,
      expires_in: null,
      refresh_token: null,
      scope: null,
      isSuccessfull: false,
      errorDescription: "codeが取得できませんでした",
    });
  }
  await fetch("https://discordapp.com/api/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: "1319225068592824411",
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code: `${code}`,
      redirect_uri: "https://seijoscience.com/redirect",
    }),
  }).then(
    (response) => {
      //第一引数:成功時の処理
      response.json().then((response) => {
        grantAccess = {
          access_token: response.access_token,
          token_type: response.token_type,
          expires_in: response.expires_in,
          refresh_token: response.refresh_token,
          scope: response.scope,
          isSuccessfull: true,
          errorDescription: null,
        };
      });
    },
    (error) => {
      //第二引数:失敗時の処理
      grantAccess = {
        access_token: null,
        token_type: null,
        expires_in: null,
        refresh_token: null,
        scope: null,
        isSuccessfull: false,
        errorDescription: error,
      };
    }
  );
  return grantAccess as typeGrantAccess;
};

const getDiscordUserData = async function (
  token: String
): Promise<typeUserData> {
  await fetch("https://discordapp.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      //第一引数:成功時の処理
      response.json().then((response) => {
        if (response.premium_type !== 2) {
          userData = {
            avatar: response.avatar,
            banner: null,
            email: response.email,
            global_name: response.global_name,
            id: response.id,
            username: response.username,
            isSuccessfull: true,
            errorDescription: null,
          };
        } else if (response.premium_type === 2) {
          userData = {
            avatar: response.avatar,
            banner: response.banner,
            email: response.email,
            global_name: response.global_name,
            id: response.id,
            username: response.username,
            isSuccessfull: true,
            errorDescription: null,
          };
        }
      });
    },
    (error) => {
      //第二引数:失敗時の処理
      userData = {
        avatar: null,
        banner: null,
        email: null,
        global_name: null,
        id: null,
        username: null,
        isSuccessfull: false,
        errorDescription: error,
      };
    }
  );
  return userData as typeUserData;
};

export default async function discordLogin(code: String) {
  let grantAccess = await grantDiscordAccessToken(code);
  if (grantAccess.isSuccessfull) {
    let userData = await getDiscordUserData(grantAccess.access_token);
    return userData;
  } else {
    return grantAccess;
  }
}

/*export { grantDiscordAccessToken, getDiscordUserData };
export type { typeGrantAccess, typeUserData };
*/