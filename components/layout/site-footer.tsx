import Link from "next/link";
import { AGENT_VERSION } from "@/lib/agent-content";
import { AsciiWaveHorizontal } from "@/components/landing/ascii-wave-horizontal";

const externalLinks = [
  { label: "GitHub", href: "https://github.com/ZedoMak/obsidian-agent" },
  { label: "PyPI", href: "https://pypi.org/project/obsidian-agent-cli-app/" },
  { label: "MCP", href: "https://modelcontextprotocol.io" },
  { label: "OpenRouter", href: "https://openrouter.ai" },
];

const siteLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

type SiteFooterProps = {
  showCta?: boolean;
};

export function SiteFooter({ showCta = false }: SiteFooterProps) {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-x-0 top-0 opacity-20 pointer-events-none overflow-hidden">
        <AsciiWaveHorizontal className="w-full" />
      </div>

      {showCta && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-balance">
            Ready to talk to your vault?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Read the docs to install, configure, and start chatting with your
            Obsidian notes in under a minute.
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-md bg-foreground hover:bg-foreground/90 text-background transition-colors"
          >
            Read the docs
          </Link>
        </div>
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ${showCta ? "pb-12" : "py-12"}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-mono text-primary font-bold">◈</span>
            </div>
            <div>
              <span className="font-semibold">obsidian-agent</span>
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                v{AGENT_VERSION}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                {link.label}
              </Link>
            ))}
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            Python 3.11+ · MCP · OpenRouter
          </p>
        </div>
      </div>
    </footer>
  );
}
