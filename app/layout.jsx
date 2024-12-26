import { Urbanist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

const jbm = JetBrains_Mono({
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
        <div className="w-full lg:w-[1024px] lg:mx-auto">{children}</div>
      </body>
    </html>
  );
}
