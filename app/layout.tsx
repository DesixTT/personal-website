import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mihnea Vodă | Software Engineer & Web Consultant | Systems Enthusiast",
  description:
    "Portfolio of Mihnea Vodă — Software Engineer & Web Consultant. Experienced in secure backend development, production B2B platforms, and graduate focus on high-performance computing systems (CNIHPC) at KTH Royal Institute of Technology.",
  keywords: [
    "Mihnea Vodă",
    "Software Engineer",
    "Web Consultant",
    "Full-Stack Developer",
    "Systems Enthusiast",
    "HPC",
    "CNIHPC",
    "High Performance Computing",
    "KTH",
    "Babeș-Bolyai University",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Mihnea Vodă" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090D16] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
