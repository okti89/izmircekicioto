import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://izmircekicioto.com"),
  title: { default: "İzmir Çekici | 7/24 Oto Çekici ve Yol Yardım", template: "%s | İzmir Çekici" },
  description: "İzmir genelinde 7/24 oto çekici, akü takviye, oto elektrik, oto kurtarma ve ağır vasıta desteği.",
  robots: { index: true, follow: true },
  verification: { google: "tDYuZGLd9mi3zRKgIyCNqY84z5N-5OqbSG-9QXOlEVc" },
  openGraph: { type: "website", locale: "tr_TR", siteName: "İzmir Çekici", images: [{ url: "/og.png", width: 1200, height: 630, alt: "İzmir Çekici 7/24 yol yardım" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.ico", apple: "/icon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body>{children}</body></html>; }
