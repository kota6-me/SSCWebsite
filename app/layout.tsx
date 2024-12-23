import { Urbanist } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}
