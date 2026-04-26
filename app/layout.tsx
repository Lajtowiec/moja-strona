import type { Metadata } from "next";
import "./globals.css";

const title = "Tomasz Gzella | Inżynier projektu i twórca narzędzi technicznych";
const description =
  "Inżynier projektu w branży uzdatniania wody. Łączę doświadczenie serwisowe, projektowe i cyfrowe, tworząc rozwiązania, które działają w realnych warunkach.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
