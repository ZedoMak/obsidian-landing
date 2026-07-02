import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ChangelogPageContent } from "@/components/changelog/changelog-page-content";

export const metadata: Metadata = {
  title: "Changelog — obsidian-agent",
  description: "Release history and new features in obsidian-agent.",
};

export default function ChangelogPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ChangelogPageContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
