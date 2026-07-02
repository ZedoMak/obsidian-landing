import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsPageContent } from "@/components/docs/docs-page-content";

export const metadata: Metadata = {
  title: "Documentation — obsidian-agent",
  description:
    "Install, configure, and use obsidian-agent — the conversational AI agent for your Obsidian vault.",
};

export default function DocsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-16">
            <DocsSidebar />
            <DocsPageContent />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
