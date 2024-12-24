import Link from "next/link";
export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="https://discord.com/oauth2/authorize?client_id=1319225068592824411&response_type=code&redirect_uri=https%3A%2F%2Fseijoscience.com%2Fredirect&scope=identify+guilds+email">
        Login with Discord
      </Link>
    </div>
  );
}
