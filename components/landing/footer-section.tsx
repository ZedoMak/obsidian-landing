"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check, Github } from "lucide-react";
import { AsciiWaveHorizontal } from "./ascii-wave-horizontal";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ZedoMak/obsidian-agent",
  },
  {
    label: "PyPI",
    href: "https://pypi.org/project/obsidian-agent-cli-app/",
  },
  {
    label: "MCP",
    href: "https://modelcontextprotocol.io",
  },
  {
    label: "OpenRouter",
    href: "https://openrouter.ai",
  },
];

export function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install obsidian-agent-cli-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 opacity-20 pointer-events-none overflow-hidden">
        <AsciiWaveHorizontal className="w-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-balance">
            Ready to talk to your vault?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Install with pip, run the first-time setup, and start chatting with
            your Obsidian notes in under a minute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow"
            >
              <code className="font-mono text-sm text-foreground">
                pip install obsidian-agent-cli-app
              </code>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </button>
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-6 h-11 text-sm font-medium group"
              asChild
            >
              <a
                href="https://github.com/ZedoMak/obsidian-agent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-mono text-primary font-bold">◈</span>
            </div>
            <span className="font-semibold">obsidian-agent</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
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
