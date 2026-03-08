import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Middleton",
  description: "Middleton Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-[720px] mx-auto px-5 py-10">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">
          Last updated: February 28, 2026
        </p>

        <p className="mb-5">
          Middleton (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
          App&rdquo;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you use our mobile application.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-3">
            <strong>Account Information:</strong> When you create an account, we
            collect your name, email address, username, and profile photo.
          </p>
          <p className="mb-3">
            <strong>Extended Profile Information:</strong> You may optionally
            provide additional personal details through the Extended Profile
            section of the App. This includes:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>
              <strong>Demographics &amp; Identity:</strong> Age, gender,
              education level, employment status, income range, marital status,
              number of children, and homeownership status.
            </li>
            <li>
              <strong>Political Engagement:</strong> Political event attendance,
              donation amounts and frequency, and volunteer history.
            </li>
            <li>
              <strong>Issues &amp; Preferences:</strong> Top political issues,
              policy stances, and favorite media outlets.
            </li>
            <li>
              <strong>Contact &amp; Communication:</strong> Preferred contact
              method, best contact time, social media platforms, email
              subscription preferences, phone number, mailing address, and zip
              code.
            </li>
            <li>
              <strong>Additional:</strong> Skills and expertise, and issues that
              would change your vote.
            </li>
          </ul>
          <p className="mb-3">
            All extended profile information is voluntary and can be updated or
            removed at any time.
          </p>
          <p className="mb-3">
            <strong>User-Generated Content:</strong> Posts, comments, debate
            participation, and other content you create within the App.
          </p>
          <p className="mb-3">
            <strong>Device Information:</strong> We may collect device type,
            operating system version, and unique device identifiers for app
            functionality and diagnostics.
          </p>
          <p className="mb-3">
            <strong>Camera &amp; Microphone:</strong> With your permission, we
            access your camera and microphone for video debate features. This
            data is not stored beyond the session unless you explicitly save it.
          </p>
          <p className="mb-3">
            <strong>Photo Library:</strong> With your permission, we access your
            photo library so you can upload profile photos and images for posts.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide, maintain, and improve the App&apos;s features</li>
            <li>
              To enable social features such as posts, debates, and messaging
            </li>
            <li>
              To personalize your experience by suggesting relevant posts,
              debates, and content based on your profile information, interests,
              and activity
            </li>
            <li>
              To generate and display aggregated election odds, polling trends,
              and political analytics using anonymized and aggregated user data
            </li>
            <li>
              To show you ads and sponsored content that are more relevant to
              you (see Section 3 below)
            </li>
            <li>
              To measure the effectiveness and reach of ads shown within the App
            </li>
            <li>
              To process transactions through our payment provider (Stripe)
            </li>
            <li>To send important service-related notifications</li>
            <li>To ensure the safety and integrity of the platform</li>
          </ul>
        </Section>

        <Section title="3. Advertising">
          <p className="mb-3">
            To ensure a more satisfying experience, Middleton uses the
            information you provide to deliver ads and sponsored content that
            align with your interests &mdash; while filtering out irrelevant or
            unwanted advertising. Rather than showing you random ads from any
            party, we use your profile details, activity, content you interact
            with, demographic information, and general location (such as state
            or zip code) to recommend ads that are actually useful and relevant
            to you.
          </p>
          <p className="mb-2">
            <strong>How ads are personalized:</strong>
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>
              Advertisers describe their intended audience (e.g., users in a
              certain state, age range, or with certain political interests), and
              we match their ads to users who are most likely to find them
              relevant. We do this without sharing your personal information
              directly with advertisers.
            </li>
            <li>
              We use your profile data, the posts you engage with, debates you
              participate in, and your stated political preferences to determine
              which ads best match your interests &mdash; and to prevent ads
              from unwanted or irrelevant parties from reaching you.
            </li>
            <li>
              We may use aggregated and anonymized user data to provide
              advertisers with reports on the performance of their ads (e.g.,
              how many people saw or interacted with an ad).
            </li>
          </ul>
          <p className="mb-2">
            <strong>What we do NOT do:</strong>
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>We do not sell your personal information to advertisers.</li>
            <li>
              We do not share your name, email, or other directly identifying
              information with advertisers without your consent.
            </li>
            <li>
              We do not use the content of your private messages to target ads.
            </li>
          </ul>
          <p>
            You may see labels such as &ldquo;Sponsored&rdquo; or
            &ldquo;Ad&rdquo; on advertising content within the App.
          </p>
        </Section>

        <Section title="4. Data Sharing">
          <p className="mb-3">
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Service Providers:</strong> Third-party services that help
              us operate the App (e.g., hosting, payment processing via Stripe,
              real-time communication via LiveKit).
            </li>
            <li>
              <strong>Advertising Partners:</strong> We may share anonymized,
              aggregated data with advertising partners to help them understand
              the reach and effectiveness of their campaigns. We do not share
              personally identifiable information with advertisers without your
              explicit consent.
            </li>
            <li>
              <strong>Analytics Providers:</strong> We may share anonymized
              usage data with analytics services to help us understand how the
              App is used and improve our services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law,
              regulation, or legal process.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          <p>
            We implement industry-standard security measures including
            encryption, secure authentication (JWT), and rate limiting to
            protect your data. However, no method of electronic transmission or
            storage is 100% secure.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your data for as long as your account is active. You may
            request deletion of your account and associated data at any time by
            contacting us.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            The App is not intended for children under 16. We do not knowingly
            collect personal information from children under 16.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or export your personal data. To exercise these
            rights, contact us at the email below.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes through the App or via email.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p className="mb-2">
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <a
            href="mailto:support@middletonapp.com"
            className="text-blue-500 hover:underline"
          >
            support@middletonapp.com
          </a>
        </Section>

        <footer className="mt-12 pt-8 border-t border-border/40 text-xs text-muted-foreground">
          <p>&copy; 2026 Middleton. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
