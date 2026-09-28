import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shineberg.com"),
  title: "Sharon Shineberg | Advisor & companion to ventures from day one",
  description:
    "Advisor and companion to ventures from day one. Direct talk, defined scope, real partnership. For AI strategy and execution, see Reef TRH.",
  keywords:
    "Advisor, Ventures, Startups, AI, Agentic Systems, Reef TRH, The Last Founder",
  authors: [{ name: "Sharon Shineberg" }],
  openGraph: {
    type: "website",
    siteName: "Sharon Shineberg",
    title: "Sharon Shineberg | Advisor & companion to ventures from day one",
    description:
      "Direct talk, defined scope, real partnership. I move fast when the plan is concrete.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-paper text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
