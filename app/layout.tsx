import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomasz Gzella | Inżynier środowiska i twórca aplikacji technicznych",
  description:
    "Nowoczesna strona zawodowa Tomasza Gzelli. Inżynier środowiska, praktyk terenowy i twórca aplikacji technicznych wspierających analizę, organizację i pracę inżynierską.",
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
