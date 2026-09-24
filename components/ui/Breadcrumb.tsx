import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumb({ items, light = false }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight
                  size={12}
                  aria-hidden="true"
                  className={cn(light ? "text-white/40" : "text-brand-400")}
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "text-xs font-medium",
                    light ? "text-white/60" : "text-brand-500"
                  )}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 rounded-sm",
                    light
                      ? "text-white/70 hover:text-white"
                      : "text-brand-500 hover:text-brand-700"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
