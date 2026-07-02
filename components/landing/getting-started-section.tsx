"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  {
    label: "Install",
    code: `# Install with pip
pip install obsidian-agent-cli-app

# Or with pipx for isolation
pipx install obsidian-agent-cli-app

# obsidian-mcp is pulled in automatically`,
  },
  {
    label: "Config",
    code: `# Config is stored at:
# ~/.config/obsidian-agent/config.toml

# View current config
obsidian-agent config

# Reset all settings
obsidian-agent config --reset

# Override via environment
export OPENROUTER_API_KEY="sk-..."
export OBSIDIAN_VAULT_PATH="/path/to/vault"
export AGENT_MODEL="anthropic/claude-3.5-sonnet"`,
  },
  {
    label: "Doctor",
    code: `# Run diagnostics
obsidian-agent doctor

# Checks:
#  ✓ obsidian-mcp is installed
#  ✓ obsidian-mcp is on PATH
#  ✓ Vault path is accessible
#  ✓ API key is valid
#  ✓ Model is reachable`,
  },
];

const features = [
  { 
    title: "Built on MCP", 
    description: "Uses the Model Context Protocol — the same protocol Claude Desktop uses for tool access."
  },
  { 
    title: "OpenRouter powered", 
    description: "Connect to any LLM via OpenRouter. Free-tier models available for getting started."
  },
  { 
    title: "Local-first", 
    description: "Your vault stays on your filesystem. Notes are read and written locally via obsidian-mcp."
  },
  { 
    title: "Zero config after setup", 
    description: "First-run wizard saves everything to config.toml. Override with env vars when needed."
  },
];

export function GettingStartedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="getting-started" className="relative py-32 overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-mono text-primary mb-3">// GETTING STARTED</p>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-balance">
              Install in seconds.<br />Start chatting.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              One pip install, one first-run wizard. You&apos;re up and running
              with an AI agent that understands your vault in under a minute.
            </p>
            
            {/* Features list */}
            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-1 bg-primary/30 rounded-full shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Code block */}
          <div className="lg:sticky lg:top-32">
            <div className="rounded-xl overflow-hidden bg-card border border-border card-shadow">
              {/* Tabs */}
              <div className="flex items-center gap-1 p-2 border-b border-border bg-secondary/30">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                      activeTab === idx
                        ? "bg-card text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code>
                    {codeExamples[activeTab].code.split('\n').map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        <span className="text-muted-foreground/40 select-none w-8 inline-block">{i + 1}</span>
                        <span 
                          dangerouslySetInnerHTML={{ 
                            __html: highlightSyntax(line) 
                          }} 
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
              
              {/* Terminal output */}
              <div className="border-t border-border p-4 bg-secondary/20">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                  <span className="text-green-500">$</span>
                  <span>pip install obsidian-agent-cli-app</span>
                </div>
                <div className="text-xs font-mono text-muted-foreground/60">
                  Successfully installed obsidian-agent-cli-app
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a href="https://pypi.org/project/obsidian-agent-cli-app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">
                PyPI Package
              </a>
              <span className="text-border">|</span>
              <a href="https://github.com/ZedoMak/obsidian-agent" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground font-mono">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function highlightSyntax(line: string): string {
  return line
    .replace(/(pip|pipx|obsidian-agent|install|export|obsidian-mcp)/g, '<span class="text-foreground">$1</span>')
    .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
    .replace(/(#.*$)/g, '<span class="text-muted-foreground/50">$1</span>')
    .replace(/(✓)/g, '<span class="text-green-400">$1</span>');
}
