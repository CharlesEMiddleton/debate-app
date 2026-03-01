import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import {
  Newspaper,
  Bell,
  Shield,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function AuthGuard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }
  return null;
}

const features = [
  {
    icon: Bell,
    title: "Breaking Alerts",
    description:
      "Get instant push notifications on the stories that matter most to you.",
  },
  {
    icon: TrendingUp,
    title: "Trending Topics",
    description:
      "Stay on top of the political landscape with real-time trending analysis.",
  },
  {
    icon: MessageSquare,
    title: "Community Debate",
    description:
      "Engage in civil, moderated discussions with people across the political spectrum.",
  },
  {
    icon: Shield,
    title: "Fact-Checked",
    description:
      "Every story is verified by our editorial team before it reaches your feed.",
  },
];

export default function ProtectedPage() {
  return (
    <>
      <Suspense>
        <AuthGuard />
      </Suspense>

      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="relative max-w-5xl mx-auto px-5 py-24 md:py-32 flex flex-col items-center text-center gap-8">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Coming Soon
            </Badge>

            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground shadow-lg app-icon-float">
              <Newspaper size={40} />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Middleton
              <br />
              <span className="text-primary/80">News & Politics</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Your trusted source for balanced news coverage and civil political
              discourse. Stay informed, join the conversation, and make your
              voice heard.
            </p>

            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold mt-4">
              <Link href="/waitlist">Join the Waitlist</Link>
            </Button>

            <p className="text-sm text-muted-foreground">
              We&apos;re working hard to bring this to you. Stay tuned for
              launch updates.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-5 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What to expect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for people who care about the truth and want to engage
              meaningfully with the world around them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:shadow-md transition-shadow duration-300 border-foreground/5"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <feature.icon size={20} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-5 py-24 text-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl">
              Something big is on the way
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Middleton News & Politics is coming soon — balanced, verified, and
              community-driven news, the way it should be.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
