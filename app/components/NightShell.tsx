import type { ReactNode } from "react";
import Footer from "./Footer";
import { NightHeader } from "./NightHeader";

export function NightShell({
  current,
  children,
}: {
  current: string;
  children: ReactNode;
}) {
  return (
    <div className="theme-night min-h-screen bg-night text-bone font-body text-[17px] leading-[1.7] flex flex-col">
      <NightHeader current={current} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
