import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '@/Components/Footer';
import DockNav from '@/Components/DockNav/DockNav';
import DarkVeilWrapper from '@/Components/DarkVeilWrapper';

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
      <body className={`${inter.className} font-sans bg-white text-brand-dark dark:bg-black dark:text-gray-200 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            {/* DarkVeil Background for dark mode */}
            <DarkVeilWrapper />
            <main className="relative z-20">
              {children}
            </main>
            <div className="relative z-40">
              <Footer />
            </div>
            <DockNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
