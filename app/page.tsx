import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
          <span className="font-semibold text-lg tracking-tight">
            Middleton
          </span>
          <div className="flex items-center gap-4">
            <Link href="/report-bug" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Report a Bug
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="inline-block rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Coming Soon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Find or Be the Next{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              President, Governor,
            </span>{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              or Even Senator
            </span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            The platform where political leaders are discovered, debated, and
            elevated. We&apos;re building something big — be the first to know.
          </p>

          <div className="pt-2">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold">
              <Link href="/waitlist">Sign Up for the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-border/40 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Middleton. All rights reserved.</p>
          <p>Built for the future of politics.</p>
        </div>
      </footer>
    </main>
  );
}
