import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Veris Consulting — Твій провідник у фінансовій системі Іспанії",
  description: "Безкоштовний скоринг фінансування для експатів в Іспанії",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
