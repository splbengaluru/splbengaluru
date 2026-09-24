import Script from "next/script";
import "@/styles/theme.css";
import "@/styles/site.css";
import "@/styles/brand.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Archivo+Black&family=Space+Mono:wght@400;700&family=Shrikhand&family=Noto+Sans+Kannada:wght@900&family=Inter:wght@400;500;600&display=swap";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spl-bengaluru.vercel.app"),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: { images: ["/og.png"] },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E4BFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        {children}
        {/* Page behaviour (reveal, countdown, touch grass, leaderboard) and the animated favicon */}
        <Script src="/assets/site.js" strategy="afterInteractive" />
        <Script src="/assets/fav.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
