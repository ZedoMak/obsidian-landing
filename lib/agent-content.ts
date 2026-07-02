export const AGENT_VERSION = "0.1.0";

export const AGENT_PACKAGE = "obsidian-agent-cli-app";

export const INSTALL_COMMAND = `pip install ${AGENT_PACKAGE}`;

export type ChangelogEntry = {
  version: string;
  date: string;
  summary: string;
  features: string[];
  fixes?: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.1.0",
    date: "2026-03-01",
    summary: "Initial public release of obsidian-agent.",
    features: [
      "Conversational AI agent for your local Obsidian vault",
      "Built on MCP (Model Context Protocol) via obsidian-mcp for vault access",
      "OpenRouter integration — use any supported LLM, including free-tier models",
      "First-run setup wizard for API key, vault path, and model selection",
      "Config persisted to ~/.config/obsidian-agent/config.toml",
      "Environment variable overrides: OPENROUTER_API_KEY, OBSIDIAN_VAULT_PATH, AGENT_MODEL",
      "CLI commands: obsidian-agent, obsidian-agent doctor, obsidian-agent config",
      "In-session commands: /help, /tools, /clear, /exit",
      "Vault operations: read, create, edit, delete notes; search by text, tag, date, or regex",
      "Tag management, backlinks, broken links, and orphaned note detection",
      "Multi-step operation chaining — the agent figures out which tools to run",
      "System-level instruction to read notes before editing (no blind overwrites)",
      "obsidian-agent doctor for troubleshooting PATH, vault access, and dependencies",
    ],
  },
];

export const DOCS_SECTIONS = [
  { id: "requirements", label: "Requirements" },
  { id: "install", label: "Install" },
  { id: "first-run", label: "First Run" },
  { id: "usage", label: "Usage" },
  { id: "session-commands", label: "Session Commands" },
  { id: "capabilities", label: "What It Can Do" },
  { id: "config", label: "Configuration" },
  { id: "troubleshooting", label: "Troubleshooting" },
] as const;
