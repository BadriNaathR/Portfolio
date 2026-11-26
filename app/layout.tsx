import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Badrinaath R — Generative AI Engineer",
    template: "%s | Badrinaath R",
  },
  description:
    "Generative AI Engineer building intelligent enterprise applications, agentic systems, and full-stack AI products. Based in Chennai, India.",
  keywords: ["Generative AI Engineer", "AI Engineer", "RAG", "LangChain", "FastAPI", "React", "Chennai"],
  authors: [{ name: "Badrinaath R" }],
  openGraph: {
    title: "Badrinaath R — Generative AI Engineer",
    description: "Engineering Intelligence. Building What Comes Next.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        {/* No-flash theme init — runs before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('portfolio-theme');
            if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
          } catch(e) {}
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
