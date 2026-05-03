import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://app.renaldi.fun"),
  title: "Renaldi Mohamad | Full-Stack Developer",
  description:
    "Full-stack developer with ~2 years of experience building production-grade applications including government systems for social media monitoring and infrastructure dashboards. Specialized in React, Vue.js, Node.js, NestJS, and scalable system architecture.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Vue.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Government Systems",
  ],
  authors: [{ name: "Renaldi Mohamad" }],
  openGraph: {
    type: "website",
    title: "Renaldi Mohamad | Full-Stack Developer",
    description:
      "Full-stack developer portfolio - Building scalable data-intensive applications",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
