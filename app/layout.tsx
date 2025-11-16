import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata: Metadata = {
  title: "NCLEX Study Hub - Comprehensive NCLEX Exam Preparation",
  description: "Master the NCLEX exam with interactive flashcards, comprehensive study guides, and progress tracking. Free study materials for nursing students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
