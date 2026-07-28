interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-copy mt-5">{description}</p>}
    </div>
  );
}
