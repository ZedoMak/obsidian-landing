"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DOCS_SECTIONS } from "@/lib/agent-content";

export function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>(DOCS_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const section of DOCS_SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <nav className="sticky top-28 space-y-1">
        <p className="text-xs font-mono text-muted-foreground mb-4 px-3">
          ON THIS PAGE
        </p>
        {DOCS_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "block px-3 py-2 text-sm rounded-lg transition-colors",
              activeId === section.id
                ? "text-foreground bg-secondary/80"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
