"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type EventParams } from "../lib/analytics";

export function TrackedLink({
  href,
  event,
  params,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  event: string;
  params?: EventParams;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  const onClick = () => trackEvent(event, params);
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
