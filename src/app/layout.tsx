import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tailwind Table',
  description:
    'A practice to learn Tailwind by making a table with responsiveness and dark mode',
  icons: {
    icon: '/public/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head> */}
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
