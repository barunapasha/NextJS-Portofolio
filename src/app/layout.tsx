import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
// import SplashCursor from '@/Animations/SplashCursor/SplashCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Baruna Pasha - Frontend Developer',
  description: 'Frontend Developer based in Jakarta, Indonesia. Passionate in Frontend Development and Mobile Development.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Flutter', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Baruna Pasha' }],
  creator: 'Baruna Pasha',
  openGraph: {
    title: 'Baruna Pasha - Frontend Developer',
    description: 'Frontend Developer based in Jakarta, Indonesia. Passionate in Frontend Development and Mobile Development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baruna Pasha - Frontend Developer',
    description: 'Frontend Developer based in Jakarta, Indonesia. Passionate in Frontend Development and Mobile Development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans bg-white text-brand-dark dark:bg-brand-dark dark:text-gray-200`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            {/* SplashCursor - Temporarily Disabled */}
            {/* <SplashCursor /> */}
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
