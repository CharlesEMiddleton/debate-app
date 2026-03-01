"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";
import Link from "next/link";

export default function WaitlistPage() {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const fullName = (formData.get("full_name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim().toLowerCase();
    const phone = (formData.get("phone") as string)?.trim();

    if (!fullName || fullName.length < 2) {
      setError("Please enter your full name.");
      setIsPending(false);
      return;
    }

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsPending(false);
      return;
    }

    if (!phone || phone.length < 7) {
      setError("Please enter a valid phone number.");
      setIsPending(false);
      return;
    }

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

      const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ full_name: fullName, email, phone }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data?.code === "23505") {
          setError("You're already on the waitlist!");
        } else {
          console.error("Waitlist insert error:", data);
          setError("Something went wrong. Please try again.");
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Waitlist error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Middleton
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/report-bug" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Report a Bug
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {/* Middleton News & Politics Header */}
      <section className="w-full bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-red-900/20" />

        {/* Donkey - left side */}
        <div className="absolute left-4 sm:left-10 md:left-20 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 opacity-80">
          <Image src="/donkey.png" alt="Democratic donkey" width={120} height={120} className="w-20 sm:w-24 md:w-32 h-auto drop-shadow-2xl" />
        </div>

        {/* Elephant - right side */}
        <div className="absolute right-4 sm:right-10 md:right-20 bottom-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 opacity-80">
          <Image src="/elephant.png" alt="Republican elephant" width={120} height={120} className="w-20 sm:w-24 md:w-32 h-auto drop-shadow-2xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          {/* Donkey vs Elephant - center above title */}
          <div className="flex justify-center mb-4">
            <Image src="/donkeyvselephant.png" alt="Donkey vs Elephant" width={200} height={100} className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-2xl" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
              Middleton
            </span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
              News & Politics
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base">
            Where the next generation of leaders is discovered.
          </p>
        </div>
      </section>

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-md w-full text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Sign Up for the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              Waitlist
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Be the first to know when Middleton launches. Enter your info below
            and we&apos;ll keep you in the loop.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-8 space-y-3">
              <div className="text-4xl">&#10003;</div>
              <h2 className="text-xl font-semibold">You&apos;re on the list!</h2>
              <p className="text-muted-foreground text-sm">
                We&apos;ll notify you as soon as we launch. Stay tuned.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  name="full_name"
                  type="text"
                  placeholder="Full name"
                  required
                  minLength={2}
                  className="h-12 text-base"
                  disabled={isPending}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="h-12 text-base"
                  disabled={isPending}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  minLength={7}
                  className="h-12 text-base"
                  disabled={isPending}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 text-base font-semibold w-full"
                  disabled={isPending}
                >
                  {isPending ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              {error && (
                <p className="text-sm text-destructive font-medium">{error}</p>
              )}

              <p className="text-xs text-muted-foreground">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="w-full border-t border-border/40 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
          <p>&copy; 2025 Middleton. All rights reserved.</p>
          <p>Built for the future of politics.</p>
        </div>
      </footer>
    </main>
  );
}
