"use server";
import Link from "next/link";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL || "");
const response = await sql`SELECT * FROM testdb ORDER BY id ASC`;
export default async function Home() {
  return (
    <div>
      <p>
        <span className="text-black font-urb font-bold text-5xl tracking-[-0.14em]">
          S²C
        </span>
        <span className="text-black font-urb font-bold text-5xl tracking-tight">
          {" "}
          Official Website
        </span>
      </p>
      <code> let hoge = "fuga"; </code>
      <div>
        NEON:
        <br />
        ID:{response[1].id}
        <br />
        ITEM:{response[1].data_name}
        <br />
        PRICE:¥{response[1].price_yen}.
      </div>
      <Link href="./login">Login</Link>
    </div>
  );
}
