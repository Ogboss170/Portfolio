import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oghosa (Ogboss) | Mobile & Backend Engineer | Founder @ Workspace",
  description:
    "Official portfolio of Oghosa (Ogboss), a 21-year-old Mobile & Backend Engineer from Nigeria and founder of Workspace. Specializing in React Native, NestJS, PostgreSQL, and scalable marketplace platforms.",
  keywords: [
    "Oghosa",
    "Ogboss",
    "Mobile Engineer",
    "Backend Engineer",
    "React Native",
    "Expo",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Firebase",
    "Workspace App",
    "Nigeria Software Engineer",
  ],
  authors: [{ name: "Oghosa" }],
  creator: "Oghosa",
  openGraph: {
    title: "Oghosa (Ogboss) | Founder & Software Engineer",
    description:
      "Building products that connect people, opportunities, and technology. Founder of Workspace ecosystem.",
    url: "https://ogboss.dev",
    siteName: "Oghosa Portfolio",
    images: [
      {
        url: "https://ogboss.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oghosa Founder & Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oghosa (Ogboss) | Mobile & Backend Engineer",
    description:
      "Building scalable digital products. React Native, NestJS, PostgreSQL & Firebase.",
    creator: "@ogboss",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oghosa",
  alternateName: "Ogboss",
  jobTitle: "Founder & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Workspace",
  },
  knowsAbout: [
    "React Native",
    "Expo",
    "NestJS",
    "PostgreSQL",
    "Firebase",
    "System Architecture",
    "Fintech Escrow Systems",
  ],
  nationality: "Nigerian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen selection:bg-blue-500 selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
