import type { ReactNode } from "react";

function H2({ children }: { children?: ReactNode }) {
  return <h2 className="text-2xl font-bold text-ink mt-12">{children}</h2>;
}

function H3({ children }: { children?: ReactNode }) {
  return <h3 className="text-xl font-bold text-ink mt-10">{children}</h3>;
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
      className="underline"
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
