import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupDigest — Daily async standup summaries for remote teams",
  description: "Collects async standup updates via Slack/email, generates AI summaries with blockers highlighted, and tracks progress patterns for engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ba2b54e4-1956-49a4-812b-e3a45c9f36f3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
