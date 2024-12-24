export default function Home() {
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
      <Button client:load />
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
      <a href="/login/">Login</a>
    </div>
  );
}
