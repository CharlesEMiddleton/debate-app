import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Middleton News & Politics — Full Hero */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-red-900/20" />
        <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
          <Link href="/report-bug" className="text-xs text-white/50 hover:text-white/80 transition-colors">
            Report a Bug
          </Link>
          <ThemeSwitcher />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
              Middleton
            </span>
            <br />
            <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              News & Politics
            </span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto">
            The platform where everyday citizens become influential political
            figures. Think of it as the LinkedIn for political leaders and ideas.
          </p>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Find or Be the Next... */}
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
            elevated. We&apos;re building something big, be the first to know.
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
