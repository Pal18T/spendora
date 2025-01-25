import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";




const inter = Inter({ subsets: ['ubuntu']})
export const metadata = {
  title: "Spendora",
  description: "Track, Analyze, and Grow your Finance",
};

export default function RootLayout({children}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-sm.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">
          
          {children} 
        </main>
        
        <footer className="bg-black py-8">
          <div className="container mx-auto text-center px-4 text-gray-300">
            <p>Made with ❤️ by someone</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
