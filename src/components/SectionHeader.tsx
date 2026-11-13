import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  /**
   * - "center": everything centered (default)
   * - "left":   left-aligned, with a red accent line under the title
   * - "split":  title on the left, description on the right (stacks on phones)
   */
  align?: "left" | "center" | "split";
  className?: string;
}

// Shared look for every section title: large, heavy, tight lines.
const titleClass =
  "text-4xl font-black leading-[0.95] tracking-tight text-bnavy sm:text-5xl lg:text-6xl xl:text-7xl";

export function SectionHeader({
  kicker,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <div
        data-animate="fade-up"
        className={cn("grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16", className)}
      >
        <div>
          {kicker && <p className="section-kicker">{kicker}</p>}
          <h2 className={titleClass}>{title}</h2>
        </div>
        {description && (
          <div className="lg:border-l-2 lg:border-bred lg:pb-2 lg:pl-8">
            <p className="section-copy">{description}</p>
          </div>
        )}
      </div>
    );
  }

  const centered = align === "center";

  return (
    <div
      data-animate="fade-up"
      className={cn(centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl", className)}
    >
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className={titleClass}>{title}</h2>
      {!centered && <div className="mt-6 h-1 w-20 rounded-full bg-bred" />}
      {description && (
        <p className={cn("section-copy mt-5", centered ? "mx-auto max-w-3xl" : "max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
