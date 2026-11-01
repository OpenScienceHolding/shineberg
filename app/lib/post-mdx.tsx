import type { ReactNode } from "react";

function H2({ children }: { children?: ReactNode }) {
  return (
    <h2 className="font-display font-semibold text-[28px] leading-[1.2] tracking-[-0.02em] text-bone mt-12 mb-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children?: ReactNode }) {
  return (
    <h3 className="font-display font-semibold text-[22px] leading-[1.25] text-bone mt-10 mb-3">
      {children}
    </h3>
  );
}

function Ul({ children }: { children?: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
}

function Ol({ children }: { children?: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-2">{children}</ol>;
}

function A({ href, children }: { href?: string; children?: ReactNode }) {
  const external = Boolean(href && /^https?:\/\//.test(href));
  return (
    <a
      href={href}
      className="text-bone underline decoration-night-edge underline-offset-4 hover:decoration-lime"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function Wrapper({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export const postMdxComponents = {
  h2: H2,
  h3: H3,
  ul: Ul,
  ol: Ol,
  a: A,
  wrapper: Wrapper,
};
