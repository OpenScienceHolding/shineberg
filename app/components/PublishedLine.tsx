import { formatContentDate } from "../lib/content-dates";

export function PublishedLine({
  published,
  updated,
  className = "font-mono text-xs text-fog",
}: {
  published: string;
  updated?: string;
  className?: string;
}) {
  const showUpdated = Boolean(updated && updated !== published);
  return (
    <p className={className}>
      Published {formatContentDate(published)}
      {showUpdated ? ` · Updated ${formatContentDate(updated as string)}` : null}
    </p>
  );
}
