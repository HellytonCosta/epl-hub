import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import AuthProvider from "@/context/AuthProvider";


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
        className={` bg-white antialiased`}
      >
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  );
}
