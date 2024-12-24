import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata = {
  title: "S²C - SeijoScienceClub",
  description: "SeijoScienceClub Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <div class="w-full lg:w-[1024px] lg:mx-auto font-urb">{children}</div>
      </body>
    </html>
  );
}
