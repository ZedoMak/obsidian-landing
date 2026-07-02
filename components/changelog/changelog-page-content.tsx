import { AGENT_VERSION, CHANGELOG } from "@/lib/agent-content";
import Link from "next/link";

export function ChangelogPageContent() {
  const latest = CHANGELOG[0];

  return (
    <div className="max-w-3xl">
      <header className="mb-16 pb-12 border-b border-border">
        <p className="text-sm font-mono text-primary mb-3">// CHANGELOG</p>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
          Release history
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Track what&apos;s new in obsidian-agent. The current version is{" "}
          <span className="font-mono text-foreground">v{AGENT_VERSION}</span>.
        </p>
      </header>

      <div className="mb-12 rounded-2xl border border-primary/30 bg-primary/5 p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-2xl font-semibold text-foreground">
            v{latest.version}
          </span>
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
            CURRENT
          </span>
        </div>
        <p className="text-muted-foreground mb-6">{latest.summary}</p>
        <Link
          href="/docs"
          className="text-sm text-primary hover:underline font-medium"
        >
          Read the docs to get started →
        </Link>
      </div>

      <div className="space-y-16">
        {CHANGELOG.map((entry) => (
          <article key={entry.version} className="scroll-mt-28">
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="text-2xl font-semibold font-mono">
                v{entry.version}
              </h2>
              <time
                dateTime={entry.date}
                className="text-sm text-muted-foreground font-mono"
              >
                {entry.date}
              </time>
            </div>
            <p className="text-muted-foreground mb-6">{entry.summary}</p>

            <h3 className="text-sm font-mono text-primary mb-3">FEATURES</h3>
            <ul className="space-y-2 mb-6">
              {entry.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary shrink-0">+</span>
                  {feature}
                </li>
              ))}
            </ul>

            {entry.fixes && entry.fixes.length > 0 && (
              <>
                <h3 className="text-sm font-mono text-primary mb-3">FIXES</h3>
                <ul className="space-y-2">
                  {entry.fixes.map((fix) => (
                    <li
                      key={fix}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-emerald-500 shrink-0">•</span>
                      {fix}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
