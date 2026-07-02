"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowRight, Copy, Check, Sparkles } from "lucide-react";
// import { AsciiWave } from "./ascii-wave"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [copied, setCopied] = useState(false);
  const installCommand = "pipx install obsidian-agent-cli-app";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* ascii wave */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                <AsciiWave className="w-full h-full"/>
            </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
        {/* badge */}
        <div
          className={`flex justify-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        ></div>

        {/* headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1
            className={`text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8 transition-all duration-700 delay-100 lg:text-7xl ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-geist-pixel-line), monospace" }}
          >
            <span className="text-balance">The complete CLI agent tool to</span>
            <br />
            <span className="text-balance">Work with</span>
            <span className="text-balance">Obsidian</span>
          </h1>
          <p
            className={`text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            An intelligent CLI companion that works directly on your filesystem.
            Summarize notebooks, semantically search notes, extract connections,
            and chat with your local knowledge base.
          </p>
        </div>
        <div className="max-w-md mx-auto mb-10 p-1.5 rounded-xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3 pl-3.5 font-mono text-sm text-neutral-300">
            <span className="text-purple-500 font-bold select-none">$</span>
            <span>{installCommand}</span>
          </div>
          <Button
            onClick={handleCopy}
            variant="ghost"
            size="sm"
            className="h-8 gap-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg border border-neutral-700/50"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">
                  Copied!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-xs font-medium">Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
