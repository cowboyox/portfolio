'use client';

import { AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import { FiChevronUp } from 'react-icons/fi';

import DefaultLayout from '@/components/layout/DefaultLayout';
import useScrollToTop from '@/hooks/useScrollToTop';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showScroll, backToTop } = useScrollToTop();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <AnimatePresence>
          <div className='bg-secondary-light transition duration-300 dark:bg-primary-dark'>
            <DefaultLayout>{children}</DefaultLayout>
            <FiChevronUp
              className='scrollToTop'
              onClick={backToTop}
              style={{
                height: 40,
                width: 40,
                padding: 7,
                borderRadius: 50,
                right: 50,
                bottom: 50,
                display: showScroll ? 'flex' : 'none',
              }}
            />
          </div>
        </AnimatePresence>
      </body>
    </html>
  );
}
