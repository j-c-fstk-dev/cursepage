import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Brincando em Família - Curso Boneca Waldorf',
  description: 'Aprenda a fazer bonecas Waldorf artesanais. Um curso completo em vídeo com técnicas, materiais naturais e muito amor.',
  keywords: 'boneca waldorf, curso waldorf, brinquedo waldorf, educação waldorf',
  openGraph: {
    title: 'Brincando em Família - Faça sua Boneca Waldorf',
    description: 'Curso em vídeo completo para aprender a criar bonecas Waldorf artesanalmente',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
