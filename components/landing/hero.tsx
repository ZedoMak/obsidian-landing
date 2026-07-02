"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Copy, Check } from "lucide-react";
import { AsciiWave } from "./ascii-wave";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install obsidian-agent-cli-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* ASCII Wave full width and height */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <AsciiWave className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
        {/* Badge */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Built on MCP &amp; OpenRouter
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1
            className={`text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8 transition-all duration-700 delay-100 lg:text-7xl ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
            style={{ fontFamily: "var(--font-geist-pixel-line), monospace" }}
          >
            <span className="text-balance">Talk to your</span>
            <br />
            <span className="text-balance">Obsidian</span>{" "}
            <span className="text-primary">vault.</span>
          </h1>

          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            A conversational AI agent for your Obsidian vault. Find notes,
            summarize what you wrote last week, fix broken links, tag things, or
            edit a note — it figures out which operations to run and chains
            multiple steps together.
          </p>
        </div>

        {/* Install command */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-shadow"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <code className="font-mono text-sm text-foreground">
              pip install obsidian-agent-cli-app
            </code>
            {copied ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </button>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-6 h-11 text-sm font-medium group"
            asChild
          >
            <Link href="/docs">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-6 text-sm font-medium border-border hover:bg-secondary/50 bg-transparent"
            asChild
          >
            <a href="https://github.com/ZedoMak/obsidian-agent" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden card-shadow transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {[
            {
              value: "Python 3.11+",
              label: "easy to install via pip.",
              tag: "INSTALL",
            },
            {
              value: "Any LLM",
              label: "via OpenRouter.",
              tag: "FLEXIBLE",
            },
            {
              value: "MCP",
              label: "protocol for vault access.",
              tag: "PROTOCOL",
            },
            {
              value: "Zero Config",
              label: "guided first-run setup.",
              tag: "SETUP",
            },
          ].map((stat) => (
            <div
              key={stat.tag}
              className="p-6 lg:p-8 flex justify-between min-h-[140px] bg-black shadow-none lg:py-8 flex-col"
            >
              <div>
                <span className="text-xl lg:text-2xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm lg:text-base">
                  {" "}
                  {stat.label}
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground/60 tracking-widest mt-4">
                {stat.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
