import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface PageHeroAction {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "outline";
}

interface PageHeroProps {
  kicker?: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;
}

export function PageHero({
  kicker,
  title,
  accent,
  description,
  image,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[68vh] overflow-hidden pt-24 text-white md:min-h-[74vh]">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="hero-gradient absolute inset-0" />
      {/* <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-bpaper to-transparent" /> */}

      <div className="site-container relative z-10 flex min-h-[calc(68vh-6rem)] items-end pb-16 md:min-h-[calc(74vh-6rem)] md:pb-20">
        <div className="max-w-4xl">
          {kicker && <p className="mb-4 text-sm font-bold uppercase text-bblue">{kicker}</p>}
          <h1 className="text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-8xl">
            {title}
            {accent && <span className="block text-bblue">{accent}</span>}
          </h1>
          <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primaryAction && (
                <Button size="lg" variant={primaryAction.variant ?? "default"} asChild>
                  <Link href={primaryAction.href}>{primaryAction.label}</Link>
                </Button>
              )}
              {secondaryAction && (
                <Button size="lg" variant={secondaryAction.variant ?? "outline"} asChild>
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
