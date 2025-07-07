// app/layout.js
import "@/styles/globals.css";   // ← your Tailwind base/components/utilities

export const metadata = {
  title: "Alex Chen — Resonance",
  description: "Where ancient wisdom meets quantum possibilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}

