import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

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
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
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
        <Analytics />
        <SpeedInsights />
        {googleAnalyticsId ? (
          <>
            <Script id="google-consent" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'granted'
                });
              `}
            </Script>
            <GoogleAnalytics gaId={googleAnalyticsId} />
          </>
        ) : null}
      </body>
    </html>
  );
}
