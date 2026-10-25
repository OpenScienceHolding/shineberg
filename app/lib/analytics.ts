export type EventParams = Record<string, string | number | boolean>;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/**
 * Send a GA4 event. No-ops when NEXT_PUBLIC_GA_ID is unset or on the server,
 * so clicks stay safe before the tag loads and in local builds.
 */
export function trackEvent(name: string, params?: EventParams) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  window.dataLayer.push(["event", name, params]);
}
