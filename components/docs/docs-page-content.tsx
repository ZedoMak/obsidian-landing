"use client";

import { useState, type ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { INSTALL_COMMAND } from "@/lib/agent-content";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-card border border-border card-shadow">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <pre className="p-6 font-mono text-sm text-muted-foreground overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pb-16 border-b border-border last:border-0">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export function DocsPageContent() {
  return (
    <div className="flex-1 min-w-0">
      <header className="mb-16 pb-12 border-b border-border">
        <p className="text-sm font-mono text-primary mb-3">// DOCUMENTATION</p>
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
          Get started with obsidian-agent
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Everything you need to install, configure, and use the conversational
          AI agent for your Obsidian vault.
        </p>
      </header>

      <DocSection id="requirements" title="Requirements">
        <ul className="list-disc pl-5 space-y-2">
          <li>Python 3.11+</li>
          <li>
            An{" "}
            <a
              href="https://openrouter.ai/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OpenRouter API key
            </a>{" "}
            (free tier available)
          </li>
          <li>An Obsidian vault on your local filesystem</li>
        </ul>
      </DocSection>

      <DocSection id="install" title="Install">
        <p>
          Install with pip or pipx. This pulls in{" "}
          <code className="font-mono text-sm text-primary">obsidian-mcp</code>{" "}
          (the vault-access server) automatically — no separate install step
          needed.
        </p>
        <CodeBlock
          code={`# With pip
pip install obsidian-agent-cli-app

# Or with pipx for an isolated install
pipx install obsidian-agent-cli-app`}
        />
      </DocSection>

      <DocSection id="first-run" title="First Run">
        <p>
          Run the agent once. You&apos;ll be asked three things, and never
          again:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your OpenRouter API key</li>
          <li>The absolute path to your vault</li>
          <li>Which model to use (defaults to a free-tier model if unsure)</li>
        </ul>
        <p>
          This is saved to{" "}
          <code className="font-mono text-sm text-primary">
            ~/.config/obsidian-agent/config.toml
          </code>
          . Change it later with{" "}
          <code className="font-mono text-sm text-foreground">
            obsidian-agent config --reset
          </code>
          .
        </p>
        <CodeBlock code={`obsidian-agent`} />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <div className="space-y-6">
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left p-4 font-mono text-foreground">
                    Command
                  </th>
                  <th className="text-left p-4 text-muted-foreground">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["obsidian-agent", "Start chatting with your vault"],
                  ["obsidian-agent doctor", "Troubleshooting: checks obsidian-mcp and vault access"],
                  ["obsidian-agent config", "View current configuration"],
                  ["obsidian-agent config --reset", "Reset all settings"],
                ].map(([cmd, desc]) => (
                  <tr key={cmd} className="border-b border-border last:border-0">
                    <td className="p-4 font-mono text-primary">{cmd}</td>
                    <td className="p-4">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>Example session:</p>
          <CodeBlock
            code={`> What did I write about last week?

Agent: I found 5 notes modified in the last 7 days.
Here's a summary...

> Tag all of those with #weekly-review

Agent: Done. Tagged 5 notes with #weekly-review.`}
          />
        </div>
      </DocSection>

      <DocSection id="session-commands" title="Session Commands">
        <p>Use these inside an active chat session:</p>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left p-4 font-mono text-foreground">
                  Command
                </th>
                <th className="text-left p-4 text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/help", "List commands"],
                ["/tools", "List every vault operation the agent can call"],
                ["/clear", "Wipe conversation history, start fresh"],
                ["/exit", "Quit (also: exit, quit, Ctrl+D)"],
              ].map(([cmd, desc]) => (
                <tr key={cmd} className="border-b border-border last:border-0">
                  <td className="p-4 font-mono text-primary">{cmd}</td>
                  <td className="p-4">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="capabilities" title="What It Can Do">
        <p>
          Anything the underlying{" "}
          <code className="font-mono text-sm text-primary">obsidian-mcp</code>{" "}
          server exposes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reading, creating, editing, and deleting notes</li>
          <li>Searching by text, tag, date, or regex</li>
          <li>Managing tags</li>
          <li>Finding backlinks and broken links</li>
          <li>Listing orphaned notes</li>
          <li>Chaining multiple steps together for complex requests</li>
        </ul>
        <p>
          Run{" "}
          <code className="font-mono text-sm text-primary">/tools</code> inside
          a session to see the live list for your installed version. The agent
          always reads a note before editing it — it won&apos;t blindly
          overwrite content.
        </p>
      </DocSection>

      <DocSection id="config" title="Configuration">
        <p>
          Config is stored at{" "}
          <code className="font-mono text-sm text-primary">
            ~/.config/obsidian-agent/config.toml
          </code>
          . Override any single value with environment variables:
        </p>
        <CodeBlock
          code={`export OPENROUTER_API_KEY="sk-..."
export OBSIDIAN_VAULT_PATH="/path/to/vault"
export AGENT_MODEL="anthropic/claude-3.5-sonnet"`}
        />
        <div className="rounded-xl border border-border overflow-hidden mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left p-4 font-mono text-foreground">
                  Variable
                </th>
                <th className="text-left p-4 text-muted-foreground">
                  Overrides
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["OPENROUTER_API_KEY", "API key"],
                ["OBSIDIAN_VAULT_PATH", "Vault path"],
                ["AGENT_MODEL", "LLM model"],
              ].map(([name, desc]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="p-4 font-mono text-primary">{name}</td>
                  <td className="p-4">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="troubleshooting" title="Troubleshooting">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              obsidian-mcp was not found on your PATH
            </h3>
            <p>
              Run{" "}
              <code className="font-mono text-sm text-foreground">
                obsidian-agent doctor
              </code>{" "}
              — it tells you exactly what&apos;s missing and how to fix it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Something else broke
            </h3>
            <p>
              This project pins dependency versions deliberately (
              <code className="font-mono text-sm text-primary">
                fastmcp==2.8.1
              </code>
              ,{" "}
              <code className="font-mono text-sm text-primary">
                pydantic&lt;2.12
              </code>
              ) because of real breaking changes upstream. If you&apos;re
              hacking on the source directly rather than using{" "}
              <code className="font-mono text-sm text-foreground">pip install</code>
              , don&apos;t loosen those pins without checking{" "}
              <code className="font-mono text-sm text-foreground">
                obsidian-agent doctor
              </code>{" "}
              still passes afterward.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Built on
            </h3>
            <p>
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MCP
              </a>{" "}
              (the same protocol Claude Desktop uses for tool access) and{" "}
              <a
                href="https://openrouter.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OpenRouter
              </a>{" "}
              for the LLM.
            </p>
          </div>
        </div>
      </DocSection>

      <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-border">
        <p className="text-sm text-muted-foreground mb-4">
          Ready to install? Copy the command below:
        </p>
        <code className="font-mono text-sm text-foreground">{INSTALL_COMMAND}</code>
      </div>
    </div>
  );
}
