import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharon Shineberg | Entrepreneur & Innovation Analyst",
  description:
    "Building autonomous systems for growth through AI-powered consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
