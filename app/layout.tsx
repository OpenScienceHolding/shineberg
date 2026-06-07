import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharon Shineberg | Innovation Strategist",
  description:
    "I help companies navigate complexity and build tomorrow's solutions using AI and strategic thinking.",
  keywords:
    "Innovation, Strategy, AI, Startups, Entrepreneurship, Agentic Systems",
  authors: [{ name: "Sharon Shineberg" }],
  viewport: "width=device-width, initial-scale=1",
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
        <meta name="theme-color" content="#F5F0E8" />
      </head>
      <body className="bg-paper text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
