"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Stethoscope } from "lucide-react";

const issues = [
  {
    title: "obsidian-mcp was not found on your PATH",
    description:
      "Run obsidian-agent doctor — it tells you exactly what's missing and how to fix it. The install pulls in obsidian-mcp automatically, but your shell may need a restart.",
    fix: "obsidian-agent doctor",
  },
  {
    title: "Vault path or API key issues",
    description:
      "Use obsidian-agent config to inspect saved settings, or reset everything with obsidian-agent config --reset. Override any single value with environment variables.",
    fix: "obsidian-agent config",
  },
  {
    title: "Something else broke after hacking on source",
    description:
      "This project pins dependency versions deliberately (fastmcp==2.8.1, pydantic<2.12) because of real breaking changes upstream. Don't loosen those pins without verifying doctor still passes.",
    fix: "obsidian-agent doctor",
  },
];

export function TroubleshootingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="troubleshooting"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-primary mb-3">// TROUBLESHOOTING</p>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-balance">
            Hit a snag? Run doctor.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most issues come down to PATH, config, or vault access. The built-in
            doctor command checks obsidian-mcp installation and whether it can
            actually reach your vault.
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {issues.map((issue, index) => (
            <div
              key={issue.title}
              className={`rounded-xl border border-border bg-card p-6 card-shadow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2">{issue.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {issue.description}
                  </p>
                  <code className="inline-flex items-center gap-2 font-mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                    <Stethoscope className="w-3.5 h-3.5" />$ {issue.fix}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`rounded-2xl border border-border bg-secondary/30 p-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-semibold mb-2">Requirements</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Python 3.11+, an{" "}
            <a
              href="https://openrouter.ai/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OpenRouter API key
            </a>{" "}
            (free tier available), and an Obsidian vault on your local
            filesystem. Issues and PRs welcome — this is a young project, so
            expect rough edges.
          </p>
        </div>
      </div>
    </section>
  );
}
