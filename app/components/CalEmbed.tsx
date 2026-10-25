"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "../lib/analytics";
import { CAL_ORIGIN } from "../lib/booking";

type CalApi = ((...args: unknown[]) => void) & {
  ns: Record<string, (...args: unknown[]) => void>;
  loaded?: boolean;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/** Cal.com's official embed loader, queueing calls until embed.js arrives. */
function loadCal(): CalApi {
  if (window.Cal) return window.Cal;
  const queue = (api: { q?: unknown[] }, args: unknown[]) => {
    (api.q = api.q || []).push(args);
  };
  const cal = function (...args: unknown[]) {
    const self = cal as CalApi;
    if (!self.loaded) {
      self.ns = {};
      self.q = self.q || [];
      const script = document.createElement("script");
      script.src = `${CAL_ORIGIN}/embed/embed.js`;
      script.async = true;
      document.head.appendChild(script);
      self.loaded = true;
    }
    if (args[0] === "init") {
      const namespace = args[1];
      const api = function (...nsArgs: unknown[]) {
        queue(api, nsArgs);
      } as ((...a: unknown[]) => void) & { q?: unknown[] };
      if (typeof namespace === "string") {
        self.ns[namespace] = self.ns[namespace] || api;
        queue(self.ns[namespace] as typeof api, args);
        queue(self, ["initNamespace", namespace]);
      } else {
        queue(self, args);
      }
      return;
    }
    queue(self, args);
  } as CalApi;
  window.Cal = cal;
  return cal;
}

export function CalEmbed({
  calLink,
  namespace,
}: {
  calLink: string;
  namespace: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const Cal = loadCal();
    Cal("init", namespace, { origin: CAL_ORIGIN });
    const api = Cal.ns[namespace];
    api("inline", {
      elementOrSelector: el,
      calLink,
      config: { layout: "month_view", theme: "light" },
    });
    api("ui", {
      theme: "light",
      cssVarsPerTheme: { light: { "cal-brand": "#111111" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    api("on", {
      action: "bookingSuccessful",
      callback: () => trackEvent("booking_complete", { meeting: namespace }),
    });
    return () => {
      el.innerHTML = "";
    };
  }, [calLink, namespace]);

  return <div ref={ref} className="w-full min-h-[600px]" />;
}
