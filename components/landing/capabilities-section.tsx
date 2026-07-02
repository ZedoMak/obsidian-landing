"use client";

import { useEffect, useRef, useState } from "react";

const commands = [
  {
    command: "obsidian-agent",
    description: "Start chatting with your vault",
    category: "Core",
  },
  {
    command: "obsidian-agent doctor",
    description: "Check obsidian-mcp installation & vault access",
    category: "Debug",
  },
  {
    command: "obsidian-agent config",
    description: "View current configuration",
    category: "Config",
  },
  {
    command: "obsidian-agent config --reset",
    description: "Reset all settings",
    category: "Config",
  },
];

const sessionCommands = [
  { command: "/help", description: "List all available commands" },
  { command: "/tools", description: "List every vault operation the agent can call" },
  { command: "/clear", description: "Wipe conversation history, start fresh" },
  { command: "/exit", description: "Quit the session" },
];

const envVars = [
  { name: "OPENROUTER_API_KEY", description: "Override API key" },
  { name: "OBSIDIAN_VAULT_PATH", description: "Override vault path" },
  { name: "AGENT_MODEL", description: "Override LLM model" },
];

export function CapabilitiesSection() {
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
    <section ref={sectionRef} id="capabilities" className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-mono text-primary mb-4">// COMMANDS & CONFIG</p>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-balance">
            Simple CLI.<br />Powerful agent.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A handful of commands is all you need. The agent handles the complexity
            of vault operations behind the scenes.
          </p>
        </div>

        {/* CLI Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {commands.map((cmd, index) => (
            <div
              key={cmd.command}
              className={`group relative bg-card rounded-xl p-6 border border-border card-shadow hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                  {cmd.category}
                </span>
                <div className="flex-1">
                  <code className="font-mono text-sm text-foreground font-semibold">
                    $ {cmd.command}
                  </code>
                  <p className="text-sm text-muted-foreground mt-1">{cmd.description}</p>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-mono text-xs">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Session Commands & Environment Variables */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Session Commands Card */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border card-shadow transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative z-10 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Session Commands
              </h3>
              <div className="space-y-3">
                {sessionCommands.map((cmd) => (
                  <div
                    key={cmd.command}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border"
                  >
                    <code className="font-mono text-sm text-primary">{cmd.command}</code>
                    <span className="text-xs text-muted-foreground">{cmd.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none" />
          </div>

          {/* Environment Variables Card */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border card-shadow transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative z-10 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Environment Overrides
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Config is saved to <code className="font-mono text-primary">~/.config/obsidian-agent/config.toml</code>. 
                Override any value with environment variables:
              </p>
              <div className="font-mono text-xs text-muted-foreground space-y-3 bg-background/50 rounded-lg p-6 border border-border">
                <div className="text-primary mb-2"># Override config values</div>
                {envVars.map((env) => (
                  <div key={env.name} className="flex items-center gap-2">
                    <span className="text-foreground">{env.name}</span>
                    <span className="text-muted-foreground/40">=</span>
                    <span className="text-green-400">&quot;...&quot;</span>
                    <span className="text-muted-foreground/40 ml-2"># {env.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
