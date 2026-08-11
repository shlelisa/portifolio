import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lelisa Shashura | Software Engineer & IT Professional",
  description:
    "Personal portfolio of Lelisa Shashura, a Software Engineer & IT Professional specializing in full-stack web engineering, database architecture, and enterprise software solutions.",
  keywords: [
    "Lelisa Shashura",
    "Software Engineer",
    "IT Professional",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PHP",
    "PostgreSQL",
    "Portfolio",
    "MongoDB"
  ],
  authors: [{ name: "Lelisa Shashura" }],
  openGraph: {
    title: "Lelisa Shashura | Software Engineer & IT Professional",
    description:
      "Software Engineering graduate and IT professional building modern, scalable, and user-friendly software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Lelisa Shashura Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased selection:bg-blue-600 selection:text-white">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
