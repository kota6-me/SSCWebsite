"use server";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL || "");
const response = await sql`SELECT * FROM testdb ORDER BY id ASC`;
export default async function Home() {
  return (
    <div>
      <p>
        <span class="text-black font-urb font-bold text-5xl tracking-[-0.14em]">
          S²C
        </span>
        <span class="text-black font-urb font-bold text-5xl tracking-tight">
          {" "}
          Official Website
        </span>
      </p>
      <Button />
      <code> let hoge = "fuga"; </code>
      <div>
        NEON:
        <br />
        ID:{response[0].id}
        <br />
        ITEM:{response[0].data_name}
        <br />
        PRICE:¥{response[0].price_yen}.
      </div>
      <Link href="./login">Login</Link>
    </div>
  );
}
