import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EPL Hub",
  description: "English Premier League Standings",
  icons: "/logos/trophy-1.svg",
  creator: "HCS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <Header />
        <main
          className="min-h-svh "
          style={{
            backgroundImage: "url('/images/football-pitch.jpg')",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
