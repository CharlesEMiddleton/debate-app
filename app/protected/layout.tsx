import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import { EnvVarWarning } from "@/components/env-var-warning";
import Link from "next/link";
import { Suspense } from "react";
import { Newspaper } from "lucide-react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <Link
              href="/protected"
              className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            >
              <Newspaper size={22} className="text-primary" />
              <span>Middleton News & Politics</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/report-bug" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Report a Bug
              </Link>
              {!hasEnvVars ? (
                <EnvVarWarning />
              ) : (
                <Suspense>
                  <AuthButton />
                </Suspense>
              )}
            </div>
          </div>
        </nav>
        <div className="flex-1 w-full">{children}</div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8 text-muted-foreground">
          <p>&copy; 2026 Middleton News & Politics</p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
