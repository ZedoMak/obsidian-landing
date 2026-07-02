"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare, Settings } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Install in one command",
    description:
      "pip install obsidian-agent-cli-app pulls in obsidian-mcp automatically. No separate vault server setup.",
  },
  {
    icon: Settings,
    title: "Configure once",
    description:
      "First run asks for your OpenRouter key, vault path, and model. Saved locally — never prompted again.",
  },
  {
    icon: MessageSquare,
    title: "Chat with your vault",
    description:
      "Ask in plain English. Find notes, summarize, tag, fix links, or edit — the agent chains steps as needed.",
  },
];

export function MarketingHowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-mono text-primary mb-3">// HOW IT WORKS</p>
          <h2
            className={`text-3xl lg:text-5xl font-semibold tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From install to conversation in three steps.
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No plugins, no cloud sync required. Your vault stays on your
            filesystem — the agent reads and writes locally via MCP.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`rounded-xl border border-border bg-card p-8 card-shadow transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-mono text-xs text-primary mb-2">
                0{index + 1}
              </p>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Full setup guide in the docs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
